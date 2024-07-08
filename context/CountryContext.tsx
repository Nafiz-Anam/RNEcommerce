import React, { createContext, useState, useContext } from "react";

type CountryContextType = {
    selectedCountry: string;
    setSelectedCountry: (country: string) => void;
};

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [selectedCountry, setSelectedCountry] = useState<string>("");

    return (
        <CountryContext.Provider
            value={{ selectedCountry, setSelectedCountry }}
        >
            {children}
        </CountryContext.Provider>
    );
};

export const useCountry = () => {
    const context = useContext(CountryContext);
    if (!context) {
        throw new Error("useCountry must be used within a CountryProvider");
    }
    return context;
};
