import Header1 from "@/components/common/header/structure/header-1/index";
import Header2 from "@/components/common/header/structure/header-2/index";

const ScrollHeader = ({ header_list }) => {
	// This file is for detecting scroll and changing header according to scroll

	return (
		<div className="m-0">
			<Header2 header_list={header_list} />
			<Header1 header_list={header_list} />
		</div>
	);
};

export default ScrollHeader;
