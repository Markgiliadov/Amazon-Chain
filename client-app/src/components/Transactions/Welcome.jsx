import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../../Contexts/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";
import Loader from "./Loader";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
    createEthereumContract,
    cropAmount,
    reimburse,
    submitContract,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    // const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    // if (!addressTo || !amount || !keyword || !message) return;
    submitContract();
    // sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center bg-slate-900	">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Conduct business online with Amazon Chain
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-zinc-800 flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="bg-gray-700 p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-zinc-200	 p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Price For Deal"
              name="Price"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Supplying % (1st Stage)"
              name="Stage1"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Producing % (2nd Stage)"
              name="Stage2"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Distributing % (3rd Stage)"
              name="Stage3"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Duration of the project"
              name="Duration"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Borrower ( Crop Maker ) - Address"
              name="BorrowerAddress"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Lender ( Bussiness Man ) - Address"
              name="LenderAddress"
              type="text"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Create new contract
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={async () => {
              // cropAmount();
              reimburse();
              // const contract = createEthereumContract();
              // // const availableTransactions = await contract.getAllTransactions();
              // console.log(availableTransactions);
              // const count = await contract.getTransactionCount();
              // console.log("COPUNT: " + count);
            }}
            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
          >
            Test Transaction Amount
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
