export const validateRequired = (value: string) => {
   if (value === "") {
      return {
         result: {
            value,
            valid: false,
         },
         detail: {
            message: "필수 입력 항목입니다.",
            color: "#E94B35",
         },
      };
   } else {
      return {
         result: {
            value,
            valid: true,
         },
         detail: {
            message: "",
            color: "#E94B35",
         },
      };
   }
};

// export const validateAuthCode = async () => {
//    // 백엔드 생기면
// };

// export const validateEquals = () => {
//    const { value } = input;

//    if (value !== equals) {
//       setOption({
//          detail: {
//             message: "일치하지 않습니다.",
//             color: "#E94B35",
//          },
//          border: {
//             color: "#E94B35",
//          },
//       });
//    } else if (value === equals) {
//       setOption({
//          detail: {
//             message: "일치합니다.",
//             color: "#1AAF5D",
//          },
//          border: {
//             color: "#1AAF5D",
//          },
//       });
//    }
// };

export const validateEmail = (value: string) => {
   if (value === "") {
      return {
         result: {
            value,
            valid: false,
         },
         detail: {
            message: "필수 입력 항목입니다.",
            color: "#E94B35",
         },
      };
   } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      return {
         result: {
            value,
            valid: true,
         },
         detail: {
            message: "사용 가능한 이메일 형식입니다.",
            color: "#1AAF5D",
         },
      };
   } else {
      return {
         result: {
            value,
            valid: false,
         },
         detail: {
            message: "이메일 형식이 올바르지 않습니다.",
            color: "#E94B35",
         },
      };
   }
};

export const validatePassword = (value: string) => {
   if (value === "") {
      return {
         result: {
            value,
            valid: false,
         },
         detail: {
            message: "필수 입력 항목입니다.",
            color: "#E94B35",
         },
      };
   } else if (
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/.test(value)
   ) {
      return {
         result: {
            value,
            valid: true,
         },
         detail: {
            message: "사용 비밀번호 형식입니다.",
            color: "#1AAF5D",
         },
      };
   } else {
      return {
         result: {
            value,
            valid: false,
         },
         detail: {
            message: "비밀번호 형식이 올바르지 않습니다.",
            color: "#E94B35",
         },
      };
   }
};

export const validatePasswordCheck = (value: string, equals: string) => {
   if (value === "") {
      return {
         result: {
            value,
            valid: false,
         },
         detail: {
            message: "필수 입력 항목입니다.",
            color: "#E94B35",
         },
      };
   } else if (value === equals) {
      return {
         result: {
            value,
            valid: true,
         },
         detail: {
            message: "일치합니다.",
            color: "#1AAF5D",
         },
      };
   } else {
      return {
         result: {
            value,
            valid: false,
         },
         detail: {
            message: "일치하지 않습니다.",
            color: "#E94B35",
         },
      };
   }
};

export const validatePhoneNumber = (value: string) => {
   if (value === "") {
      return {
         result: {
            value,
            valid: false,
         },
         detail: {
            message: "필수 입력 항목입니다.",
            color: "#E94B35",
         },
      };
   } else if (/^\d{11}$/.test(value)) {
      return {
         result: {
            value,
            valid: true,
         },
         detail: {
            message: "사용 가능한 전화번호 형식입니다.",
            color: "#1AAF5D",
         },
      };
   } else {
      return {
         result: {
            value,
            valid: false,
         },
         detail: {
            message: "전화번호 형식이 올바르지 않습니다.",
            color: "#E94B35",
         },
      };
   }
};
