import Section from "./Section";

const Footer = () => {
    const body =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel provident sapiente quasi est praesentium quia aut optio ipsa facilis! Suscipit totam culpa neque facilis expedita nulla animi tempora iure provident.";
    return (
        <div className="w-50 mx-auto mt-4 text-center">
            <Section title="Sub-heading 3" body={body} />
        </div>
    );
};

export default Footer;
