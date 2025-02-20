import { DefaultTheme } from "vitepress";
import { resolve } from "path";
import YAML from "yaml";
import fs from "fs";

export function sidebar(text: string, name: string): [DefaultTheme.SidebarItem] {
	const scan = (path, link) => {
		const meta = YAML.parse(
			fs.readFileSync(resolve(path, "meta.yaml"), "utf-8")
		);
		const collapsed = meta.collapsed;
		const items = meta.sidebar
			.map((item) => Object.entries(item)[0])
			.map(([key, text]) => {
				const item: DefaultTheme.SidebarItem = { text };
				const child = resolve(path, key);
				if (fs.existsSync(child) && fs.lstatSync(child).isDirectory()) {
					if (fs.existsSync(resolve(child, "meta.yaml"))) {
						Object.assign(item, scan(child, resolve(link, key)));
					}
				}
				if (
					fs.existsSync(resolve(path, key + ".md")) ||
					fs.existsSync(resolve(child, "index.md"))
				) {
					item.link = resolve(link, key);
				}
				return item;
			});
		return { collapsed, items };
	};
	const path = resolve("src", name);
	const link = resolve("/", name);
	return [{ text, link, ...scan(path, link) }];
}
