import WindowsIcon from "./icons/WindowsIcon";
import MacIcon from "./icons/MacIcon";
import CodeIcon from "./icons/CodeIcon";
import ArmIcon from "./icons/ArmIcon";
import PackageIcon from "./icons/PackageIcon";

function DownloadOptions() {
  const icons = [WindowsIcon, MacIcon, CodeIcon, ArmIcon, PackageIcon];

  return (
    <div className="download-options">
      {icons.map((Icon, index) => (
        <button key={index} className="os-icon-button" type="button">
          <Icon />
        </button>
      ))}
    </div>
  );
}

export default DownloadOptions;
