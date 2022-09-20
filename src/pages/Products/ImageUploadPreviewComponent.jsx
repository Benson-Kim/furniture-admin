import React, { Component } from "react";
import { MdDeleteOutline, MdOutlineCloudUpload } from "react-icons/md";

export default class ImageUploadPreviewComponent extends Component {
	fileArray = [];
	fileObjs = [];

	formatBytes(bytes, decimals = 2) {
		if (bytes === 0) return "0 Bytes";
		const k = 1024;
		const dm = decimals < 0 ? 0 : decimals;
		const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
		const i = Math.floor(Math.log(bytes) / Math.log(k));

		return (
			parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
		);
	}

	constructor(props) {
		super(props);
		this.state = {
			file: [null],
		};
		this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
		this.uploadFiles = this.uploadFiles.bind(this);
		this.removeFile = this.removeFile.bind(this);
		this.formatBytes = this.formatBytes.bind(this);
	}

	uploadMultipleFiles(e) {
		this.fileObjs.push(e.target.files);
		for (let i = 0; i < this.fileObjs[0].length; i++) {
			this.fileArray.push(this.fileObjs[0][i]);
		}
		this.setState({ file: this.fileArray });
	}

	removeFile(file) {
		const updatedFiles = [...this.fileArray];
		this.fileArray.splice(this.fileArray.indexOf(file), 1);
		this.fileArray = updatedFiles;
	}

	uploadFiles(e) {
		e.preventDefault();
		console.log(this.state.file);
	}

	render() {
		return (
			<>
				<div className='relative w-[400px] h-[200px] border-2 border-dashed border-blue-300 rounded-2xl flex items-center justify-center bg-blue-100'>
					<div className='p-3 font-semibold text-center text-neutral-400'>
						<MdOutlineCloudUpload className='mx-auto text-blue-400 text-8xl' />
						<p>Drag & Drop your files here</p>
					</div>

					<input
						type='file'
						accept='image/*'
						multiple
						onChange={this.uploadMultipleFiles}
						className='absolute block w-[400px] h-[200px] opacity-0 cursor-pointer'
					/>
				</div>
				<div className='mt-8'>
					<p className='mb-5 font-normal'>Ready to upload</p>
					{(this.fileArray || []).map((item, idx) => (
						<div
							key={idx}
							className='flex items-center justify-between px-2 py-1 mb-2 font-light border rounded-md '
						>
							<div className='flex gap-x-4'>
								<div className='p-2 rounded-md bg-slate-200'>
									<img
										src={URL.createObjectURL(item)}
										alt='...'
										className='object-contain w-8 h-full '
									/>
								</div>

								<div className='my-auto'>
									<h1 className='text-neutral-700'>
										{item.name}
									</h1>
									<span className='text-sm text-neutral-500'>
										{this.formatBytes(item.size)}
									</span>
								</div>
							</div>
							<button
								onClick={this.removeFile(item)}
								className='text-2xl transition duration-300 ease-in text-neutral-500 hover:text-red-500'
							>
								<MdDeleteOutline />
							</button>
						</div>
					))}
				</div>
				<button
					type='button'
					className='btn btn-danger btn-block'
					onClick={this.uploadFiles}
				>
					Upload
				</button>
			</>
		);
	}
}
