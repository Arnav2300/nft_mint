import React from 'react';
import './Sidebar.css';
import { AiOutlineAppstore,AiOutlineWallet,AiOutlineShopping } from 'react-icons/ai';
export default function Sidebar(){
    return(
        <div className="w-16 sm:w-32 md:w-56 h-screen bg-sdb fixed ">
            <div className="flex flex-col justify-start item-center">
                <div className="pt-5 pb-7 text-white flex justify-start items-center m-auto">
                    <div className='hidden text-lg sm:flex sm:text-xl lg:text-2xl'>
                        <a href='#'><strong className="font-sans">crypto</strong><strong className="font-cursive2 italic">nerds</strong></a>
                    </div>
                    <div className='flex text-2xl sm:hidden'>
                        <a href='#'><strong className="font-sans">c</strong><strong className="font-cursive2 italic">n</strong></a>
                    </div>
                </div>
                <a href='#' className='group'>
                    <div className="text-base py-4 flex justify-start items-center pl-5 gap-4 border-x-4 border-transparent group-hover:bg-hovbg group-hover:border-l-4 group-hover:border-l-hovblu m-auto">
                        <AiOutlineAppstore className="inline-block stroke-white fill-white group-hover:fill-hovblu group-hover:stroke-hovblu"></AiOutlineAppstore>
                        <span className="hidden sm:flex px-2 font-poppins text-white inline-block align-middle group-hover:text-hovblu">Dashboard</span>
                    </div>
                </a>
                <a href='#' className='group'>
                    <div className="py-4 flex justify-start items-center pl-5 gap-4 border-x-4 border-transparent group-hover:bg-hovbg group-hover:border-l-4 group-hover:border-l-hovblu m-auto">
                        <svg className="w-4 inline-block stroke-white fill-white group-hover:fill-hovblu group-hover:stroke-hovblu" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.53 122.88"><title>shopping-bag</title><path d="M4.93,30.34H27.41V25.76a25.77,25.77,0,0,1,51.53,0v4.58H101.6a4.91,4.91,0,0,1,3.47,1.45h0a4.9,4.9,0,0,1,1.44,3.48v69.9a17.75,17.75,0,0,1-17.7,17.7H17.7A17.75,17.75,0,0,1,0,105.18V35.28A4.91,4.91,0,0,1,1.45,31.8h0a4.91,4.91,0,0,1,3.47-1.45Zm28.76,0h39V25.76a19.49,19.49,0,0,0-39,0v4.58Zm-6.28,13V36.62H6.28v62h94V36.62H78.94v6.76a6.48,6.48,0,1,1-6.28-.12V36.62h-39v6.71a6.48,6.48,0,1,1-6.28,0Z"/></svg>
                        <span className="hidden sm:flex px-2 font-poppins text-white inline-block align-middle group-hover:text-hovblu">Marketplace</span>
                    </div>
                </a>
                <a href='#' className='group'>
                    <div className="py-4 flex justify-start items-center pl-5 gap-4 border-x-4 border-transparent group-hover:bg-hovbg group-hover:border-l-4 group-hover:border-l-hovblu m-auto">
                        <svg className="w-4 inline-block stroke-white fill-white group-hover:fill-hovblu group-hover:stroke-hovblu" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 98.27"><title>photos</title><path d="M4.84,27.31H90.76a4.77,4.77,0,0,1,3.4,1.41,4.84,4.84,0,0,1,1.41,3.4V93.47a4.75,4.75,0,0,1-1.41,3.39,1.36,1.36,0,0,1-.25.22,4.67,4.67,0,0,1-3.18,1.19H4.81A4.81,4.81,0,0,1,0,93.47V32.12a4.77,4.77,0,0,1,1.41-3.4,4.83,4.83,0,0,1,3.4-1.41ZM32.15,0h85.92a4.77,4.77,0,0,1,3.4,1.41,4.84,4.84,0,0,1,1.41,3.4V66.16a4.75,4.75,0,0,1-1.41,3.39,1.09,1.09,0,0,1-.25.22A4.67,4.67,0,0,1,118,71h-5.38V65.22h4.51V5.71H33.06v4.2H27.31V4.81a4.77,4.77,0,0,1,1.41-3.4A4.84,4.84,0,0,1,32.12,0ZM18.5,13.66h85.92a4.75,4.75,0,0,1,3.39,1.41,4.8,4.8,0,0,1,1.41,3.39V79.81a4.77,4.77,0,0,1-1.41,3.4,1.4,1.4,0,0,1-.25.22,4.67,4.67,0,0,1-3.18,1.19H99V78.88h4.51V19.37H19.4v4.2H13.65V18.46a4.81,4.81,0,0,1,4.81-4.8ZM24.68,44a6.9,6.9,0,1,1-6.89,6.89A6.89,6.89,0,0,1,24.68,44Zm29,29.59L67.49,49.71,82.14,86.77H13.77V82.18l5.74-.29,5.75-14.08,2.87,10.06h8.62l7.47-19.25L53.7,73.56ZM89.86,33H5.75V92.53H89.86V33Z"/></svg>
                        <span className="hidden sm:flex px-2 font-poppins text-white inline-block align-middle group-hover:text-hovblu">Collections</span>
                    </div>
                </a>
                <a href='#' className='group'>
                    <div className="text-base py-4 flex justify-start items-center pl-5 gap-4 border-x-4 border-transparent group-hover:bg-hovbg group-hover:border-l-4 group-hover:border-l-hovblu m-auto">
                        <AiOutlineWallet className="w-4 inline-block stroke-white fill-white group-hover:fill-hovblu group-hover:stroke-hovblu"></AiOutlineWallet>
                        <span className="hidden sm:flex px-2 font-poppins text-white inline-block align-middle group-hover:text-hovblu">Wallet</span>
                    </div>
                </a>
                <a href='#' className='group'>
                    <div className="py-4 flex justify-start items-center pl-5 gap-4 border-x-4 border-transparent group-hover:bg-hovbg group-hover:border-l-4 group-hover:border-l-hovblu m-auto">
                        <svg className="w-4 inline-block stroke-white fill-white group-hover:fill-hovblu group-hover:stroke-hovblu" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135.42 122.88"><title>bar-chart</title><path d="M65.62,14.08H85.85a2,2,0,0,1,2,2V95.56a2,2,0,0,1-2,2H65.62a2,2,0,0,1-2-2V16a2,2,0,0,1,2-2Zm69.8,108.8H9.93v0A9.89,9.89,0,0,1,0,113H0V0H12.69V110.19H135.42v12.69ZM103.05,53.8h20.23a2,2,0,0,1,2,2V95.56a2,2,0,0,1-2,2H103.05a2,2,0,0,1-2-2V55.75a2,2,0,0,1,2-2ZM28.19,29.44H48.42a2,2,0,0,1,1.95,1.95V95.56a2,2,0,0,1-1.95,2H28.19a2,2,0,0,1-2-2V31.39a2,2,0,0,1,2-1.95Z"/></svg>
                        <span className="hidden sm:flex px-2 font-poppins text-white inline-block align-middle group-hover:text-hovblu">Statistics</span>
                    </div>
                </a>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="flex flex-col justify-start item-center">
                <a href='#' className='group'>
                    <div className="py-4 flex justify-start items-center pl-5 gap-4 border-x-4 border-transparent group-hover:bg-hovbg group-hover:border-l-4 group-hover:border-l-hovblu m-auto">
                        <svg className="w-4 inline-block stroke-white fill-white group-hover:fill-hovblu group-hover:stroke-hovblu" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><title>sun-warm</title><path d="M30,13.21A3.93,3.93,0,1,1,36.8,9.27L41.86,18A3.94,3.94,0,1,1,35.05,22L30,13.21Zm31.45,13A35.23,35.23,0,1,1,36.52,36.52,35.13,35.13,0,0,1,61.44,26.2ZM58.31,4A3.95,3.95,0,1,1,66.2,4V14.06a3.95,3.95,0,1,1-7.89,0V4ZM87.49,10.1A3.93,3.93,0,1,1,94.3,14l-5.06,8.76a3.93,3.93,0,1,1-6.81-3.92l5.06-8.75ZM109.67,30a3.93,3.93,0,1,1,3.94,6.81l-8.75,5.06a3.94,3.94,0,1,1-4-6.81L109.67,30Zm9.26,28.32a3.95,3.95,0,1,1,0,7.89H108.82a3.95,3.95,0,1,1,0-7.89Zm-6.15,29.18a3.93,3.93,0,1,1-3.91,6.81l-8.76-5.06A3.93,3.93,0,1,1,104,82.43l8.75,5.06ZM92.89,109.67a3.93,3.93,0,1,1-6.81,3.94L81,104.86a3.94,3.94,0,0,1,6.81-4l5.06,8.76Zm-28.32,9.26a3.95,3.95,0,1,1-7.89,0V108.82a3.95,3.95,0,1,1,7.89,0v10.11Zm-29.18-6.15a3.93,3.93,0,0,1-6.81-3.91l5.06-8.76A3.93,3.93,0,1,1,40.45,104l-5.06,8.75ZM13.21,92.89a3.93,3.93,0,1,1-3.94-6.81L18,81A3.94,3.94,0,1,1,22,87.83l-8.76,5.06ZM4,64.57a3.95,3.95,0,1,1,0-7.89H14.06a3.95,3.95,0,1,1,0,7.89ZM10.1,35.39A3.93,3.93,0,1,1,14,28.58l8.76,5.06a3.93,3.93,0,1,1-3.92,6.81L10.1,35.39Z"/></svg>
                        <span className="hidden sm:flex px-2 font-poppins text-white inline-block align-middle group-hover:text-hovblu">Toggle Theme</span>
                    </div>
                </a>
                <a href='#' className='group'>
                    <div className="py-4 flex justify-start items-center pl-5 gap-4 border-x-4 border-transparent group-hover:bg-hovbg group-hover:border-l-4 group-hover:border-l-hovblu m-auto">
                        <svg className="w-4 inline-block stroke-white fill-white group-hover:fill-hovblu group-hover:stroke-hovblu" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" ><path d="M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z"/></svg>
                        <span className="hidden sm:flex px-2 font-poppins text-white inline-block align-middle group-hover:text-hovblu">Settings</span>
                    </div>
                </a>
            </div>
            
        </div>
    );
}