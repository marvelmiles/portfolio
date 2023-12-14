import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  gap: 8px;
  justify-content: normal;
  align-items: center;
  width: 100%;
`;

// export const AnchorTag = style.a`
// ${({ breakpoint }) => {
//   let css = ``;

//   if(breakpoint)
//   for (const key in breakpoint){}
//   return css;
// }}
// `;

export const Typography = styled.div.withConfig({
  shouldForwardProp(prop) {
    switch (prop) {
      case "variant":
        return false;
      default:
        return true;
    }
  }
})`
  ${({ variant }) => {
    switch (variant) {
      case "caption":
        return `
  font-size: 14px;
  `;
      case "h1":
        return `
  font-size: 22px;
  `;
      default:
        return `
  `;
    }
  }};
`;
