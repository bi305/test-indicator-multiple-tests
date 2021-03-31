import React from "react";
import Section from "./Section";

function Header() {
    const body =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorem esse vitae neque fugiat ipsa ab nostrum eum, molestiae quibusdam error non dignissimos, excepturi cumque minima aliquam? Odio, officia vitae?";
    return (
        <div className="mb-4">
            <Section title="Sub-heading 1" body={body} />
        </div>
    );
}
export default Header;
