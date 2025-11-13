// ./components/Spacer.js

// This component is purely for layout and pushing content down
export default function Spacer() {
    // We use a large, fixed height class (h-24 is 6rem or 96px)
    // You can adjust this height (h-20, h-28, etc.) to taste.
    return (
        <div className="h-24 w-full"></div>
    );
}