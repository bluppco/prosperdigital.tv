import { useState } from "react";
import Header1 from "@/components/common/header/structure/header-1/index.astro";
import Header2 from "@/components/common/header/structure/header-2/index.astro";
import { useState } from "react";

const ScrollHeader = () => {
	// This file is for detecting scroll and changing header according to scroll

	const [scrolled, setScrolled] = useState(0);

	return <div>{scrolled ? <Header2 /> : <Header1 />}</div>;
};

export default ScrollHeader;
