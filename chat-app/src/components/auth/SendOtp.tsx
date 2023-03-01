interface ContainerProps {
    list: any;
    verify: any;
}

function SendOtp({list, verify}:ContainerProps) {
    return (
        <div className='text-start'>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer ">
                <label className="modal-box relative h-40" htmlFor="">
                    <p className="">Is this your correct number?</p>
                    <h3 className="text-xl font-bold mt-3">{list||"+27 79 553 5147"}</h3>
                    
                    <label className='flex  pt-4 pr-5 justify-between '>
                        <label htmlFor="my-modal-4" className="text-xl danger">Edit</label>
                        <label onClick={verify} htmlFor="my-modal-4" className="text-xl danger float-righ">Yes</label>
                    </label>
                </label>
            </label>
        </div>
    );
}

export default SendOtp;
