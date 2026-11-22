---
---
const WIKI_SEARCH_INDEX = [
  {% assign searchable_pages = site.pages | sort: "path" %}
  {% for item in searchable_pages %}
    {% assign item_path = item.path | downcase %}
    {% unless item_path contains "assets/" or item_path contains "_modele" or item_path contains "404" or item_path contains "recherche.html" %}
  {
    title: {{ item.title | default: site.title | jsonify }},
    url: {{ item.url | relative_url | jsonify }},
    text: {{ item.content | strip_html | strip_newlines | jsonify }}
  }{% unless forloop.last %},{% endunless %}
    {% endunless %}
  {% endfor %}
];
