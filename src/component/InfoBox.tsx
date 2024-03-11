import { ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  children: ReactNode;
  severity: "low" | "medium" | "high";
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox = (props: InfoBoxProps) => {
  const { mode, children } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox  infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      {/* {mode === "warning" ? <h2>Warning</h2> : null} */}
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};
export default InfoBox;