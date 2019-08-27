export const transformNewInputIntoSpecialFormat = string => {
    // function that's the current money value and formats it to UI
    if (string) {
      const array = string.split("");
      const numArray = [];
      array.forEach(string => numArray.push(parseInt(string)));
      let formatted = "";

      if (numArray.length === 7) {
        if (numArray[1] < 1) {
          formatted = `${numArray[0]}mil`;
        } else {
          formatted = `${numArray[0]}.${numArray[1]}mil`;
        }
      } else if (numArray.length === 6) {
        if (numArray[3] < 1) {
          formatted = `${numArray[0]}${numArray[1]}${numArray[2]}k`;
        } else {
          formatted = `${numArray[0]}${numArray[1]}${numArray[2]}.${
            numArray[3]
          }k`;
        }
      } else if (numArray.length === 5) {
        if (numArray[2] < 1) {
          formatted = `${numArray[0]}${numArray[1]}k`;
        } else {
          formatted = `${numArray[0]}${numArray[1]}.${numArray[2]}k`;
        }
      } else if (numArray.length === 4) {
        if (numArray[1] < 1) {
          formatted = `${numArray[0]}k`;
        } else {
          formatted = `${numArray[0]}.${numArray[1]}k`;
        }
      } else {
        formatted = `${numArray.join("")}`;
      }

      return formatted;
    }
  };

  export const calculateGrowthThisMonth = (formData) => {
    const prevMonth = formData.previousMonth;
    const currentMonth = formData.currentMonth;
    let gain;

    const gainOrLoss = ((currentMonth - prevMonth) / prevMonth) * 100;
    if (gainOrLoss > 0) {
      gain = true;
    } else if (gainOrLoss < 0) {
      gain = false;
    }
    return [gain, gainOrLoss];
  };

  export const takeOldDataAndReplaceWithNewData = (formData, setIsModalOpen) => {
    const truncatedDataFormat = transformNewInputIntoSpecialFormat(
      formData.currentMonth
    );
    if (truncatedDataFormat) {
      setIsModalOpen(false);
      return truncatedDataFormat;
    }
  };