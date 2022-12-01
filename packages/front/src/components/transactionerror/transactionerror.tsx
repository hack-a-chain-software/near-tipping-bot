export const TransactionError = () => {
  return (
    <div className="flex bg-grey font-sans  text-white flex-col mb-0 pb-0 items-stretch ">
      <div className="flex flex-col lg:flex-row justify-center text-center items-center   min-h-screen">
            <img src="\images\tipping_bot_transaction_error.png" className="mx-0 pr-0"></img>
            <div className="px-2 flex items-start">
                <div className="text-start py-0 my-0">
                    <h1 className="font-extrabold text-5xl pb-8">Something went wrong :(</h1>
                    <p className="font-medium text-xl opacity-80  "><strong>Error 101</strong></p>
                    <p className="font-medium text-xl opacity-80  pb-8">Try again later</p>
                    <div className="pt-2 text-center h-full">
                        <a href="./transaction_succed.html" className="underline font-medium text-xl">Back to discord</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )

}

export default TransactionError;
