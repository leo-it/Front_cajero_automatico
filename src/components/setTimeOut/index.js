
export const SetTimeOut = (time, redirect) => {

  const intervalId = setInterval(() => {
    //redirect("/")
  }, [time]);
  return () => {
    clearInterval(intervalId);
  };
};
