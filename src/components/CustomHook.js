import { useEffect } from "react";
import { useSelector } from "react-redux";

const useCustomHook = (reftab) => {
  const activeTab = useSelector((state) => state.activeTab);

  useEffect(() => {
    console.log("Active Tab:", activeTab);
    console.log("RefTab:", reftab.current);

    if (reftab.current && reftab.current.classList.contains(activeTab)) {
      reftab.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeTab, reftab]);
};

export default useCustomHook;
