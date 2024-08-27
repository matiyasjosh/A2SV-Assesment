const Button: React.FC<{ text: string; round: string }> = ({ text, round }) => {
    return <button className={`text-white font-bold bg-[#264FAD] py-2 px-7 ${round}`}>{text}</button>;
  };
  
  export default Button;