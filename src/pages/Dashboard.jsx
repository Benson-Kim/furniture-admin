import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
	PieChart,
	Pie,
	Sector,
	ResponsiveContainer,
	AreaChart,
	XAxis,
	YAxis,
	Tooltip,
	Area,
	LineChart,
	CartesianGrid,
	Legend,
	Line,
	Cell,
} from "recharts";

const data = [
	{ name: "Pending", value: 400 },
	{ name: "Cancelled", value: 300 },
	{ name: "Delivered", value: 300 },
];

const revenuedata = [
	{
		day: "Mon",
		amt: 2400,
	},
	{
		day: "Tue",
		amt: 2210,
	},
	{
		day: "Wed",
		amt: 2290,
	},
	{
		day: "Thu",
		amt: 2000,
	},
	{
		day: "Fri",
		amt: 2181,
	},
	{
		day: "Sat",
		amt: 2500,
	},
	{
		day: "Sun",
		amt: 2100,
	},
];
const productsdata = [
	{
		date: "Product A",
		amt: 20397,
	},
	{
		date: "Product B",
		amt: 26984,
	},
	{
		date: "Product C",
		amt: 24705,
	},
	{
		date: "Product D",
		amt: 35746,
	},
	{
		date: "Product E",
		amt: 28723,
	},
	{
		date: "Product F",
		amt: 39981,
	},
	{
		date: "Product G",
		amt: 42848,
	},
];
const visitorsdata = [
	{
		name: "Page A",
		amt: 1836,
	},
	{
		name: "Page B",
		amt: 1388,
	},
	{
		name: "Page C",
		amt: 1956,
	},
	{
		name: "Page D",
		amt: 1256,
	},
	{
		name: "Page E",
		amt: 752,
	},
	{
		name: "Page F",
		amt: 817,
	},
	{
		name: "Page G",
		amt: 1375,
	},
];

const ordersdata = [
	{
		name: "Page A",
		amt: 343,
	},
	{
		name: "Page B",
		amt: 244,
	},
	{
		name: "Page C",
		amt: 846,
	},
	{
		name: "Page D",
		amt: 789,
	},
	{
		name: "Page E",
		amt: 929,
	},
	{
		name: "Page F",
		amt: 112,
	},
	{
		name: "Page G",
		amt: 228,
	},
];

const revenue = [
	{
		month: "Jan",
		2021: 52884,
		2022: 37139,
	},
	{
		month: "Feb",
		2021: 45633,
		2022: 54028,
	},
	{
		month: "Mar",
		2021: 33303,
		2022: 84844,
	},

	{
		month: "Apr",
		2021: 25493,
		2022: 31904,
	},
	{
		month: "May",
		2021: 77410,
		2022: 86380,
	},
	{
		month: "Jun",
		2021: 14552,
		2022: 20102,
	},
	{
		month: "Jul",
		2021: 46183,
		2022: 38322,
	},
	{
		month: "Aug",
		2021: 92580,
		2022: 23732,
	},
	{
		month: "Sep",
		2021: 98526,
		2022: 75639,
	},

	{
		month: "Oct",
		2021: 77763,
		2022: 68316,
	},
	{
		month: "Nov",
		2021: 59640,
		2022: 61554,
	},
	{
		month: "Dec",
		2021: 52515,
		2022: 36391,
	},
];

const COLORS = ["#10b981", "#2563eb", "#f59e0b"];

const renderActiveShape = (props) => {
	const RADIAN = Math.PI / 180;
	const {
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		startAngle,
		endAngle,
		fill,
		payload,
		percent,
		value,
	} = props;
	const sin = Math.sin(-RADIAN * midAngle);
	const cos = Math.cos(-RADIAN * midAngle);
	const sx = cx + (outerRadius + 10) * cos;
	const sy = cy + (outerRadius + 10) * sin;
	const mx = cx + (outerRadius + 30) * cos;
	const my = cy + (outerRadius + 30) * sin;
	const ex = mx + (cos >= 0 ? 1 : -1) * 22;
	const ey = my;
	const textAnchor = cos >= 0 ? "start" : "end";

	return (
		<g>
			<text x={cx} y={cy} dy={8} textAnchor='middle' fill={fill}>
				{payload.name}
			</text>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<Sector
				cx={cx}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={outerRadius + 6}
				outerRadius={outerRadius + 10}
				fill={fill}
			/>
			<path
				d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
				stroke={fill}
				fill='none'
			/>
			<circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 6}
				y={ey + 6}
				textAnchor={textAnchor}
				fill='#404040'
			>{`Orders: ${value}`}</text>
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 12}
				y={ey + 6}
				dy={14}
				textAnchor={textAnchor}
				fontWeight='300'
				fontSize='14px'
				fill='#737373'
			>
				{`(${(percent * 100).toFixed(2)}%)`}
			</text>
		</g>
	);
};

const RevenueChart = () => {
	return (
		<div className='relative h-0 pb-20'>
			<div className='absolute top-0 left-0 w-full h-full'>
				<ResponsiveContainer>
					<AreaChart data={revenuedata}>
						<Tooltip payload={revenuedata.day} />
						<Area
							type='monotone'
							dataKey='amt'
							stroke='#26a36f'
							fill='#31ce8e'
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

const OrdersChart = () => {
	return (
		<div className='relative h-0 pb-20'>
			<div className='absolute top-0 left-0 w-full h-full'>
				<ResponsiveContainer>
					<AreaChart data={ordersdata}>
						<Tooltip />
						<Area
							type='monotone'
							dataKey='amt'
							stroke='#ff9800'
							fill='#ffaa2f'
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

const VisitorsChart = () => {
	return (
		<div className='relative h-0 pb-20'>
			<div className='absolute top-0 left-0 w-full h-full'>
				<ResponsiveContainer>
					<AreaChart data={visitorsdata}>
						<Tooltip />
						<Area
							type='monotone'
							dataKey='amt'
							stroke='#ea1117'
							fill='#f24e52'
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

const ProductsChart = () => {
	return (
		<div className='relative h-0 pb-20'>
			<div className='absolute top-0 left-0 w-full h-full'>
				<ResponsiveContainer>
					<AreaChart data={productsdata}>
						<Tooltip />
						<Area
							type='monotone'
							dataKey='amt'
							stroke='#653dc2'
							fill='#9073d3'
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

const MonthlyRevenueChart = () => {
	return (
		<div className='relative h-0 pb-[30%]'>
			<div className='absolute top-0 left-0 w-full h-full'>
				<ResponsiveContainer>
					<LineChart data={revenue}>
						<CartesianGrid vertical={false} strokeDasharray='1' />
						<XAxis dataKey='month' />
						<YAxis />
						<Tooltip
							contentStyle={{
								backgroundColor: "#2563eb",
								borderStyle: "none",
								borderRadius: "5px",
								padding: "2px 16px",
							}}
							labelStyle={{ display: "none" }}
							itemStyle={{
								color: "white",
								fontSize: "14px",
								fontWeight: "300",
								fontFamily: "helvetica, sans-serif",
							}}
						/>
						<Legend verticalAlign='top' height={30} />
						<Line
							name='Last Year'
							type='monotone'
							dataKey='2021'
							stroke='#10b981'
							activeDot={{ r: 6 }}
						/>

						<Line
							name='This Year'
							type='monotone'
							dataKey='2022'
							stroke='#f59e0b'
							activeDot={{ r: 6 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

const OrderCompletionChart = () => {
	const [state, setState] = useState({ activeIndex: 0 });

	const onPieEnter = (_, index) => {
		setState({
			activeIndex: index,
		});
	};
	return (
		<div className='relative h-0 pb-[52%]'>
			<div className='absolute w-full h-full -top-10 -left-8'>
				<ResponsiveContainer>
					<PieChart>
						<Legend
							wrapperStyle={{
								fontSize: "14px",
								position: "inherit",
								fontWeight: "300",
								fontFamily: "helvetica, sans-serif",
								top: "30px",
							}}
							align={"center"}
						/>
						<Pie
							activeIndex={state.activeIndex}
							activeShape={renderActiveShape}
							data={data}
							cx='55%'
							cy='55%'
							innerRadius={60}
							outerRadius={75}
							fill={"#10b981"}
							dataKey='value'
							paddingAngle={2}
							onMouseEnter={onPieEnter}
						>
							{data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

const Dashboard = () => {
	return (
		<>
			<div className='flex justify-between w-full gap-5'>
				<div className='w-full p-4 bg-white border rounded-md shadow-sm shadow-neutral-200 sm:w-1/2 xl:w-1/4 hover:shadow-blue-500 dark:bg-[#121212]'>
					<p className='text-sm text-neutral-500 dark:text-neutral-50'>
						Today Revenue
					</p>
					<span className='text-2xl font-semibold text-neutral-700 dark:text-neutral-50'>
						$8,521
					</span>
					<RevenueChart />
				</div>
				<div className='w-full p-4 bg-white border rounded-md shadow-sm dark:bg-[#121212] shadow-neutral-200 sm:w-1/2 xl:w-1/4 hover:shadow-blue-500'>
					<p className='text-sm text-neutral-500'>Today Orders</p>
					<span className='text-2xl font-semibold text-neutral-700'>
						1429
					</span>
					<OrdersChart />
				</div>
				<div className='w-full p-4 bg-white border rounded-md shadow-sm dark:bg-[#121212] shadow-neutral-200 sm:w-1/2 xl:w-1/4 hover:shadow-blue-500'>
					<p className='text-sm text-neutral-500'>Total Products</p>
					<span className='text-2xl font-semibold text-neutral-700'>
						35,818
					</span>
					<ProductsChart />
				</div>
				<div className='w-full p-4 bg-white border rounded-md shadow-sm dark:bg-[#121212] shadow-neutral-200 sm:w-1/2 xl:w-1/4 hover:shadow-blue-500'>
					<p className='text-sm text-neutral-500'>Today Visitors</p>
					<span className='text-2xl font-semibold text-neutral-700'>
						15, 752
					</span>
					<VisitorsChart />
				</div>
			</div>

			<div className='flex justify-between w-full gap-5 my-5'>
				<div className='w-full p-4 bg-white border rounded-md shadow-sm dark:bg-[#121212] shadow-neutral-200 xl:w-2/3 hover:shadow-blue-500'>
					<p className='mb-4 font-semibold text-neutral-600'>
						Total Revenue
					</p>
					<MonthlyRevenueChart />
				</div>
				{/* Top Products */}
				<div className='w-full p-4 bg-white border rounded-md shadow-sm dark:bg-[#121212] shadow-neutral-200 xl:w-1/3 hover:shadow-blue-500'>
					<div className='flex items-center justify-between mb-2'>
						<h2 className='text-lg font-bold text-neutral-600'>
							Top Products
						</h2>
						<Link
							to='/orders'
							className='font-light text-blue-600 transition duration-300 ease-in cursor-pointer hover:scale-x-105'
						>
							See all
						</Link>
					</div>
					<div className='flex justify-between px-2 py-0.5 font-light border border-b-0 rounded-md  h-[50px] hover:bg-blue-100'>
						<div className='flex h-full gap-x-4'>
							<img
								src='https://images.unsplash.com/photo-1601392740426-907c7b028119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c29mYSUyMGNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
								alt=''
								className='object-fill h-full w-14'
							/>
							<div className='mr-1'>
								<h1 className='text-neutral-800'>
									White and brown floral armchair
								</h1>
								<span className='text-sm text-neutral-500'>
									Sofas and Chairs, Artika
								</span>
							</div>
						</div>
						<p className='text-neutral-500'>$230</p>
					</div>
					<div className='flex justify-between px-2 py-0.5 font-light border border-b-0 rounded-md  h-[50px] hover:bg-blue-100'>
						<div className='flex h-full gap-x-4'>
							<img
								src='https://images.unsplash.com/photo-1623998021450-85c29c644e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwd2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
								alt=''
								className='object-contain w-16 h-full'
							/>
							<div className=''>
								<h1 className='text-neutral-800'>
									Navy Blue Smart watch
								</h1>
								<span className='text-sm text-neutral-500'>
									Men, watch
								</span>
							</div>
						</div>
						<p className='text-neutral-500'>$230</p>
					</div>
					<div className='flex justify-between px-2 py-0.5 font-light border border-b-0 rounded-md  h-[50px] hover:bg-blue-100'>
						<div className='flex h-full gap-x-4'>
							<img
								src='https://images.unsplash.com/photo-1623998021450-85c29c644e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwd2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
								alt=''
								className='object-contain w-16 h-full'
							/>
							<div className=''>
								<h1 className='text-neutral-800'>
									Navy Blue Smart watch
								</h1>
								<span className='text-sm text-neutral-500'>
									Men, watch
								</span>
							</div>
						</div>
						<p className='text-neutral-500'>$230</p>
					</div>
					<div className='flex justify-between px-2 py-0.5 font-light border border-b-0 rounded-md  h-[50px] hover:bg-blue-100'>
						<div className='flex h-full gap-x-4'>
							<img
								src='https://images.unsplash.com/photo-1623998021450-85c29c644e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwd2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
								alt=''
								className='object-contain w-16 h-full'
							/>
							<div className=''>
								<h1 className='text-neutral-800'>
									Navy Blue Smart watch
								</h1>
								<span className='text-sm text-neutral-500'>
									Men, watch
								</span>
							</div>
						</div>
						<p className='text-neutral-500'>$230</p>
					</div>
					<div className='flex justify-between px-2 py-0.5 font-light border rounded-md  h-[50px] hover:bg-blue-100'>
						<div className='flex h-full gap-x-4'>
							<img
								src='https://images.unsplash.com/photo-1623998021450-85c29c644e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwd2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
								alt=''
								className='object-contain w-16 h-full'
							/>
							<div className=''>
								<h1 className='text-neutral-800'>
									Navy Blue Smart watch
								</h1>
								<span className='text-sm text-neutral-500'>
									Men, watch
								</span>
							</div>
						</div>
						<p className='text-neutral-500'>$230</p>
					</div>
				</div>
			</div>

			<div className='flex justify-between w-full gap-5 my-5'>
				<div className='w-full p-4 bg-white border rounded-md shadow-sm dark:bg-[#121212] shadow-neutral-200 xl:w-1/3 hover:shadow-blue-500'>
					<p className='mb-4 font-semibold text-neutral-600'>
						Order Completion
					</p>
					<OrderCompletionChart />
				</div>
				<div className='w-full p-4 bg-white border rounded-md shadow-sm dark:bg-[#121212] shadow-neutral-200 xl:w-2/3 hover:shadow-blue-500'>
					<div className='flex items-center justify-between mb-2'>
						<h2 className='text-lg font-bold text-neutral-600'>
							Recent Orders
						</h2>
						<Link
							to='/'
							className='font-light text-blue-600 transition duration-300 ease-in cursor-pointer hover:scale-x-105'
						>
							See all
						</Link>
					</div>
					<table className='w-full table-auto'>
						<thead>
							<tr className='py-2 text-sm text-left text-white capitalize bg-blue-500 shadow dark:bg-gray-700'>
								<th className='p-2 font-light'>#Order No.</th>
								<th className='p-2 font-light'>date</th>
								<th className='p-2 font-light'>
									customer name
								</th>
								<th className='p-2 font-light'>email</th>
								<th className='p-2 font-light'>amount</th>
								<th className='p-2 font-light'>status</th>
							</tr>
						</thead>
						<tbody className='overflow-auto'>
							<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
								<td className='p-2 text-sm '>217801</td>
								<td className='p-2 text-sm '>03/07/2021</td>
								<td className='p-2 text-sm '>Jane Cooper</td>
								<td className='p-2 text-sm '>
									janecooper@hotmail.com
								</td>
								<td className='p-2 text-sm '>$1240</td>
								<td className='p-2 text-sm '>
									<span className='px-3 mr-2 bg-blue-50 text-blue-700 font-light rounded-lg py-1.5 '>
										Pending
									</span>
								</td>
							</tr>
							<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
								<td className='p-2 text-sm '>217801</td>
								<td className='p-2 text-sm '>03/07/2021</td>
								<td className='p-2 text-sm '>Jane Cooper</td>
								<td className='p-2 text-sm '>
									janecooper@hotmail.com
								</td>
								<td className='p-2 text-sm '>$1240</td>
								<td className='p-2 text-sm '>
									<span className='px-3 mr-2 bg-blue-50 text-blue-700 font-light rounded-lg py-1.5 '>
										Pending
									</span>
								</td>
							</tr>
							<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
								<td className='p-2 text-sm '>217804</td>
								<td className='p-2 text-sm '>23/09/2020</td>
								<td className='p-2 text-sm '>James Smith</td>
								<td className='p-2 text-sm '>
									smithjames@gmail.com
								</td>
								<td className='p-2 text-sm '>$800</td>
								<td className='p-2 text-sm '>
									<span className='px-3 mr-2 bg-rose-50 text-rose-700 font-light rounded-lg py-1.5 '>
										Cancelled
									</span>
								</td>
							</tr>
							<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
								<td className='p-2 text-sm '>217571</td>
								<td className='p-2 text-sm '>04/28/2020</td>
								<td className='p-2 text-sm'>Bell Whiteney</td>
								<td className='p-2 text-sm '>
									bell.whites@ameritech.com
								</td>
								<td className='p-2 text-sm '>$560</td>
								<td className='p-2 text-sm '>
									<span className='px-3 mr-2 bg-rose-50 text-rose-700 font-light rounded-lg py-1.5 '>
										Cancelled
									</span>
								</td>
							</tr>
							<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
								<td className='p-2 text-sm '>261818</td>
								<td className='p-2 text-sm '>23/08/2022</td>
								<td className='p-2 text-sm '>Anne Wilson</td>
								<td className='p-2 text-sm '>
									annewillys@comail.com
								</td>
								<td className='p-2 text-sm '>$2300</td>
								<td className='p-2 text-sm '>
									<span className='px-3 mr-2 bg-green-50 text-green-700 font-light rounded-lg py-1.5 '>
										Delivered
									</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
