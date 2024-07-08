const Header1 = ({ header_list }) => {
	return (
		<>
			<div className=" w-full h-56 bg-black flex justify-center items-center fixed">
				<div className=" w-[80%] flex justify-between items-center h-44 ">
					<img
						src="/logo/header-logo-1.svg"
						alt="Prosper Digital TV"
						className=" w-60 aspect-auto"
					/>

					<div className=" flex justify-center items-center lg:gap-16 md:gap-8">
						{header_list.map((item, index) => (
							<div>
								<p className="text-white font-bold text-xl uppercase tracking-widest hover:text-gold-hover cursor-pointer">
									<a href={item.data.href}>
										{item.data.title}
									</a>
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Header1;

/* 5A67A6
BC7B2B */
