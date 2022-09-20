import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Select from "react-tailwindcss-select";
import ImageUploadPreviewComponent from "./ImageUploadPreviewComponent";

const CatOptions = [
	{ value: "bathroom Furniture", label: "bathroom Furniture" },
	{ value: "kids Furniture", label: "kids Furniture" },
	{ value: "kitchen Furniture", label: "kitchen Furniture" },
	{ value: "office Furniture", label: "office Furniture" },
	{ value: "outdoor Furniture", label: "outdoor Furniture" },
	{ value: "sofas and chairs", label: "sofas and chairs" },
	{ value: "storage Units", label: "storage Units" },
];

const brandOptions = [
	{ value: "adico", label: "adico" },
	{ value: "adora", label: "adora" },
	{ value: "art nova", label: "art nova" },
	{ value: "askia", label: "askia" },
	{ value: "barksdale", label: "barksdale" },
	{ value: "colibri", label: "colibri" },
	{ value: "ecoco", label: "ecoco" },
	{ value: "homgeek", label: "homgeek" },
	{ value: "hommy", label: "hommy" },
	{ value: "intex", label: "intex" },
];

const AddProduct = ({ setAddModal }) => {
	const [category, setCategory] = useState(null);
	const [brand, setBrand] = useState(null);

	const handleCatChange = (value) => {
		console.log("value", value);
		setCategory(value);
	};
	const handleBrandChange = (value) => {
		console.log("value", value);
		setBrand(value);
	};

	return (
		<div className='relative w-3/4 p-4 mx-auto bg-white rounded-md shadow-md animate-fade-in-down'>
			<div className='flex items-center justify-between'>
				<h2 className='text-lg font-bold text-neutral-600'>
					Add Product
				</h2>
				<IoIosCloseCircleOutline
					onClick={() => setAddModal(false)}
					className='w-6 h-6 cursor-pointer hover:text-blue-600'
				/>
			</div>
			<div className='flex justify-between gap-x-12'>
				<div className='w-1/2'>
					<h2>Add Images</h2>
					<ImageUploadPreviewComponent />
				</div>
				<form className=''>
					<div className='py-4 my-5 border rounded-md border-neutral-200'>
						<div className='px-4 mb-4'>
							<label
								htmlFor='productname'
								className='text-sm capitalize text-neutral-800'
							>
								Product name
							</label>
							<input
								type='text'
								name='productname'
								placeholder='Navy Blue 2-seater moss sofa'
								className='w-full px-3 py-2 mt-1 text-sm capitalize border rounded placeholder:text-neutral-400 text-neutral-600 focus:border-neutral-400 focus:outline-none'
							/>
						</div>

						<div className='px-4 mb-4'>
							<label
								htmlFor='category'
								className='text-sm capitalize text-neutral-800'
							>
								category
							</label>

							<Select
								value={category}
								onChange={handleCatChange}
								options={CatOptions}
								placeholder='Select Category'
								isMultiple={true}
							/>
						</div>

						<div className='px-4 mb-4'>
							<label
								htmlFor='brand'
								className='text-sm capitalize text-neutral-800'
							>
								brand
							</label>
							<Select
								value={brand}
								onChange={handleBrandChange}
								options={brandOptions}
								placeholder='Select Brand'
							/>
						</div>
						<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
							<div className='px-4 mb-4'>
								<label
									htmlFor='price'
									className='text-sm capitalize text-neutral-800'
								>
									Price
								</label>
								<article className='flex items-center w-full mt-1 border rounded border-neutral-200'>
									<p className='w-1/5 h-full py-2 text-center rounded-l bg-neutral-200 text-neutral-700'>
										Ksh
									</p>
									<input
										type='number'
										name='price'
										placeholder='325'
										className='w-4/5 px-3 text-sm capitalize placeholder:text-neutral-400 text-neutral-600 focus:border-neutral-400 focus:outline-none'
									/>
								</article>
							</div>

							<div className='px-4 mb-4'>
								<label
									htmlFor='discount'
									className='text-sm capitalize text-neutral-800'
								>
									discount
								</label>
								<input
									type='number'
									name='discount'
									placeholder='10.5'
									className='w-full px-3 py-2 mt-1 text-sm capitalize border rounded placeholder:text-neutral-400 text-neutral-600 focus:border-neutral-400 focus:outline-none'
								/>
							</div>
						</div>
						<div className='px-4 mb-4'>
							<label
								htmlFor='description'
								className='text-sm capitalize text-neutral-800'
							>
								description
							</label>
							<textarea
								name='description'
								id=''
								className='w-full h-24 px-3 py-2 mt-1 text-sm border rounded placeholder:text-neutral-400 text-neutral-600 focus:border-neutral-400 focus:outline-none'
								placeholder='Brera is a collection of semi-directional and directional furniture with panel sides.'
							/>
						</div>
					</div>
					<button
						onClick={() => setAddModal(false)}
						className='px-4 w-1/3 bg-blue-600 text-white font-light rounded py-1.5 hover:bg-blue-700 transition duration-300 ease-in'
					>
						Save
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
