const Button: React.FC<{ text: string; round: string }> = ({ text, round }) => {
    return <button className={`w-[100px] h-[39px] text-white font-bold bg-[#264FAD] ${round}`}>{text}</button>;
  };
  
  export default Button;