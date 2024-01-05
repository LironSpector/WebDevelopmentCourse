export default function Clicker2({ message, buttonText }) {
    function AlertOnClick() {
        alert(message);
    }

    return (
        <button onClick={AlertOnClick}>{buttonText}</button>
    )
}