import React from "react";

const defaultValues = {
    itemList: [],
    reset: false,
}

export const MainContext = React.createContext(defaultValues);