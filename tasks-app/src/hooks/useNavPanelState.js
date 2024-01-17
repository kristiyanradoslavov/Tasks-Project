import { useState } from "react";

export default function useNavPanelState() {

    const [sideSectionState, setSideSectionState] = useState('');

    const closeSideSection = () => {
        setSideSectionState('closed');
    }

    const openSideSection = () => {
        setSideSectionState('');
    }


    return {
        sideSectionState,
        openSideSection,
        closeSideSection,
    }
}