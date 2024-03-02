import { Input } from "@/components/ui/input";
import { useState, Fragment, useRef, useEffect } from "react";

type OtpInputProps = {
  length: number;
  otp: number;
  resetOtp:boolean;
  onOtpChange: (otp: number) => void;
};

let currentOtpIndex: number = 0;

const Otp = ({ length, otp, onOtpChange ,resetOtp}: OtpInputProps): JSX.Element => {
  
  const [tempOtp, setTempOtp] = useState<string[]>(
    new Array(length || 6).fill("")
  );
  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnchange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newOtp: string[] = [...tempOtp];
    newOtp[currentOtpIndex] = value.substring(value.length - 1);

    if (!value) setActiveOtpIndex(currentOtpIndex - 1);
    else setActiveOtpIndex(currentOtpIndex + 1);

    setTempOtp(newOtp);
    onOtpChange(
      isNaN(parseInt(newOtp.join(""))) ? 0 : parseInt(newOtp.join(""))
    );
    otp = isNaN(parseInt(tempOtp.join(""))) ? 0 : parseInt(tempOtp.join(""));
  };

  const handleOnKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOtpIndex = index;
    if (key === "Backspace") {
      setActiveOtpIndex(currentOtpIndex - 1);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);



  useEffect(() => {
    // Reset tempOtp array when resetOtp changes
    if (resetOtp) {
      setTempOtp(new Array(length || 6).fill(""));
      setActiveOtpIndex(0);

    }
  }, [resetOtp, length]);

  useEffect(() => {
  
    setActiveOtpIndex(0);
  }, [length]);

  return (
    <div className="flex items-center space-x-2  w-fit">
      {tempOtp.map((_, index) => {
        return (
          <Fragment key={index}>
            <Input
              ref={index === activeOtpIndex ? inputRef : null}
                required
              onChange={handleOnchange}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              className="w-10 text-center placeholder:text-slate-300 spin-button-none dark:placeholder:text-slate-500"
              type="number"
              placeholder={(index + 1).toString()}
              value={tempOtp[index]}
            />
            {index === tempOtp.length - 1 ? null : (
              <span className="w-2 py-[0.5px] bg-foreground" />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Otp;
