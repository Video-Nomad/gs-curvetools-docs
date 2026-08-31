from docutils import nodes
from docutils.parsers.rst import Directive, directives
from docutils.statemachine import StringList


class GifVideo(Directive):
    required_arguments = 1
    final_argument_whitespace = True
    option_spec = {
        "width": directives.unchanged,
        "height": directives.unchanged,
        "align": directives.unchanged,
    }

    def run(self):
        src = self.arguments[0]

        lines = [
            f".. video:: {src}",
            "   :autoplay:",
            "   :loop:",
            "   :muted:",
            "   :nocontrols:",
            "   :playsinline:",
        ]

        # Only forward options the caller actually gave us —
        # otherwise let the video:: directive use its own default.
        if "width" in self.options:
            lines.append(f"   :width: {self.options['width']}")
        if "height" in self.options:
            lines.append(f"   :height: {self.options['height']}")
        lines.append(f"   :align: {self.options.get('align', 'center')}")

        rst = StringList(lines)
        container = nodes.container()
        self.state.nested_parse(rst, self.content_offset, container)
        return container.children


def setup(app):
    app.add_directive("gifvideo", GifVideo)
    return {"version": "1.0", "parallel_read_safe": True}
