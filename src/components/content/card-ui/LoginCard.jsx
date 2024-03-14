import React from 'react'

export const LoginCard = ({ hexaColorMain,
    hexaColorSecond }) => {
  return (
    <div className="w-full max-w-sm p-4 h-[310px] border border-gray-400 rounded-lg shadow sm:p-6 md:p-8 " style={{ background: hexaColorMain }}>
    <div className="space-y-3" >
        <h5 className="text-xl font-bold" style={{ color: hexaColorSecond }}>Sign in</h5>
        <div>
            <label className="block mb-2 text-sm font-medium" style={{ color: hexaColorSecond }}>Your email</label>
            <input type="text" className="rounded-lg block w-full p-2.5 outline-none placeholder:text-current " style={{color: hexaColorMain, backgroundColor: hexaColorSecond,}} placeholder="name@company.com"/>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium" style={{ color: hexaColorSecond }}>Your password</label>
            <input type="text" placeholder="••••••••" className="rounded-lg block w-full p-2.5 outline-none placeholder:text-current" style={{color: hexaColorMain, backgroundColor: hexaColorSecond,}}/>
        </div>
        <button type="submit" className="w-20 font-medium rounded-lg text-sm px-5 py-2.5 text-center" style={{color: hexaColorMain, backgroundColor: hexaColorSecond,}}>Login </button>
        
    </div>
</div>
  )
}
