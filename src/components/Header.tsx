import { SearchBar } from "./SearchBar";

export const Header = () => {
    return (
        <header className="flex flex-col max-w-sm mx-auto">
            <h1 className="text-2xl font-bold text-center">IP Address Tracker</h1>
            <SearchBar />
        </header>
    );
};