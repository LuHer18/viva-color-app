import React from 'react'

export const UseProfileCard = ({ hexaColorMain,
    hexaColorSecond }) => {
    return (
        <article className=" w-full max-w-sm px-4 border border-gray-400 rounded-lg shadow dark:bg-gray-80" style={{ background: hexaColorMain }}>
            <div className="flex justify-end px-4 pt-4">
                <button className="inline-block rounded-lg text-sm p-1.5" style={{ color: hexaColorSecond }} type="button">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://unavatar.io/twitter/luchoherrera18" alt="Luis Herrera img" />
                <h5 className="mb-1 text-xl font-bold" style={{ color: hexaColorSecond }} >Luis Herrera</h5>
                <span className="text-sm" style={{ color: hexaColorSecond }}>FontEnd Dev</span>
                <div className="flex mt-4 md:mt-6">
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center rounded-md "
                        style={{ color: hexaColorMain, backgroundColor: hexaColorSecond }}
                    >Add friend</a>
                    <a href="#" className="py-2 px-4 ms-2 text-sm font-medium rounded-md " style={{ color: hexaColorMain, backgroundColor: hexaColorSecond }}>Message</a>
                </div>
            </div>
        </article>
    )
}
