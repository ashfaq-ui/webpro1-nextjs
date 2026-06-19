import os
import re

base_dir = "/Users/mohamedashfaq/Desktop/PROJECTS/istore-nextjs/frontend"
public_dir = os.path.join(base_dir, "public")
app_dir = os.path.join(base_dir, "src", "app")

pages = [
    {"src_html": "iPad-page/iPad.html", "src_css": "iPad-page/iPad.css", "dest_dir": "ipad-page"},
    {"src_html": "mac-page/mac.html", "src_css": "mac-page/mac.css", "dest_dir": "mac-page"},
    {"src_html": "watch-page/watch.html", "src_css": "watch-page/watch.css", "dest_dir": "watch-page"},
    {"src_html": "airpods-page/airpods.html", "src_css": "airpods-page/airpods.css", "dest_dir": "airpods-page"},
    {"src_html": "accessories-page/accessories.html", "src_css": "accessories-page/accessories.css", "dest_dir": "accessories-page"}
]

def style_to_jsx(match):
    style_str = match.group(1)
    # Simple converter for styles like 'color: white;'
    styles = []
    for prop in style_str.split(';'):
        if prop.strip():
            parts = prop.split(':')
            if len(parts) == 2:
                key = parts[0].strip()
                val = parts[1].strip()
                # camelCase key
                key_parts = key.split('-')
                key = key_parts[0] + ''.join(word.capitalize() for word in key_parts[1:])
                styles.append(f'{key}: "{val}"')
    return 'style={{' + ', '.join(styles) + '}}'

for p in pages:
    src_html_path = os.path.join(public_dir, p["src_html"])
    src_css_path = os.path.join(public_dir, p["src_css"])
    dest_dir_path = os.path.join(app_dir, p["dest_dir"])
    
    os.makedirs(dest_dir_path, exist_ok=True)
    
    # Process CSS
    if os.path.exists(src_css_path):
        with open(src_css_path, "r", encoding="utf-8") as f:
            css_content = f.read()
        dest_css_name = os.path.basename(src_css_path).lower()
        dest_css_path = os.path.join(dest_dir_path, dest_css_name)
        with open(dest_css_path, "w", encoding="utf-8") as f:
            f.write(css_content)
    
    # Process HTML
    if os.path.exists(src_html_path):
        with open(src_html_path, "r", encoding="utf-8") as f:
            html = f.read()
            
        # Extract <main> content
        match = re.search(r'<main.*?>(.*?)</main>', html, re.IGNORECASE | re.DOTALL)
        if match:
            main_content = match.group(1)
            
            # JSX replacements
            jsx = main_content.replace('class=', 'className=')
            jsx = re.sub(r'style="([^"]*)"', style_to_jsx, jsx)
            jsx = re.sub(r'(<img[^>]*?)(?<!/)>', r'\1 />', jsx)
            jsx = jsx.replace('<br>', '<br />')
            jsx = re.sub(r'(<input[^>]*?)(?<!/)>', r'\1 />', jsx)
            
            # Wrap in component
            component_name = p["dest_dir"].replace("-", " ").title().replace(" ", "")
            page_content = f"""import './{dest_css_name}';

export default function {component_name}() {{
    return (
        <main>
{jsx}
        </main>
    );
}}
"""
            with open(os.path.join(dest_dir_path, "page.js"), "w", encoding="utf-8") as f:
                f.write(page_content)
            print(f"Migrated {p['src_html']} -> {p['dest_dir']}")
        else:
            print(f"Could not find <main> in {src_html_path}")
            
print("Done")
