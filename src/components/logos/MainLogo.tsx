import { Link } from "react-router-dom";
import styled from "styled-components";

const Svg = styled.svg`
   height: 2rem;
   transition: transform 1s ease-in-out;
   ${({ theme }) => theme.mediaQueries.mobile} {
      height: 1.5rem;
   }
`;

function MainLogo() {
   return (
      <Link
         to="/"
         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
         <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168.617 32.746">
            <g transform="translate(58.957 248.631)">
               <g transform="translate(46.689 -248.631)">
                  <path
                     d="M249.7-215.885a14.944,14.944,0,0,1-5.083-.8,9.477,9.477,0,0,1-3.656-2.27,7.657,7.657,0,0,1-1.949-3.556,10.154,10.154,0,0,1,.04-4.661,10.353,10.353,0,0,1,.884-2.612,18.065,18.065,0,0,1,1.346-2.27q.743-1.065,1.507-1.969t1.446-1.708L255-248.631h7.433l-9.6,11.371a4.3,4.3,0,0,1,1.808-.784,11.3,11.3,0,0,1,2.25-.221,9.052,9.052,0,0,1,3.7.763,7.781,7.781,0,0,1,2.913,2.21,8.306,8.306,0,0,1,1.647,3.5,11.025,11.025,0,0,1-.06,4.621,14.347,14.347,0,0,1-1.889,4.661,12.975,12.975,0,0,1-3.335,3.556,15.578,15.578,0,0,1-4.581,2.27A18.644,18.644,0,0,1,249.7-215.885Zm3.576-17.036a7.9,7.9,0,0,0-2.592.422,7.638,7.638,0,0,0-2.21,1.185,7.1,7.1,0,0,0-1.667,1.848,7.346,7.346,0,0,0-.965,2.37,4.6,4.6,0,0,0,.844,4.219,5.2,5.2,0,0,0,4.139,1.607,7.907,7.907,0,0,0,2.591-.422,7.631,7.631,0,0,0,2.21-1.185,7.427,7.427,0,0,0,1.688-1.848,7.126,7.126,0,0,0,.984-2.371,5.478,5.478,0,0,0,.04-2.37,4.029,4.029,0,0,0-.924-1.848,4.581,4.581,0,0,0-1.727-1.185A6.4,6.4,0,0,0,253.276-232.921Z"
                     transform="translate(-238.761 248.631)"
                     fill="#f7cc4f"
                  />
                  <path
                     d="M313.973-200.855l4.982-23.545h6.831L320.8-200.855Z"
                     transform="translate(-287.284 232.998)"
                     fill="#f7cc4f"
                  />
                  <path
                     d="M350.305-218.172l5.705-6.228H363.4l-10.487,11.491,5.987,12.054H351.35l-3.295-6.71-6.147,6.71h-7.554l11.089-12.054L339.818-224.4h7.393Z"
                     transform="translate(-300.433 232.998)"
                     fill="#f7cc4f"
                  />
               </g>
               <g transform="translate(-58.957 -245.07)">
                  <path
                     d="M-33.392-213.51v3.7H-58.957v-3.7ZM-53.6-223.366v-8.8h-4.332V-235.8h23.581v3.638h-4.266v8.8h4.266v3.638H-57.931v-3.638Zm4.233,0h6.482v-8.8h-6.482Z"
                     transform="translate(58.957 236.793)"
                     fill="#222"
                  />
                  <path
                     d="M26.936-225.672v2.745c0,.2,0,.331.166.43l.3.331a.456.456,0,0,0,.4.165H46.184v3.638H36.362v4.994h10.55v3.7H21.479v-3.7H32.1v-4.994H26.142a2.272,2.272,0,0,1-2.051-.86l-.562-.562A2.525,2.525,0,0,1,22.736-222v-6.118c0-.727.463-1.091,1.224-1.091H40.794c.364,0,.5-.165.5-.5v-3.109H22.769v-3.638H44.3A1.056,1.056,0,0,1,45.49-235.3v7.243c0,1.621-.76,2.381-2.414,2.381Z"
                     transform="translate(7.064 237.214)"
                     fill="#222"
                  />
                  <path
                     d="M111.39-225.467l-2.547,2.613c-1.654-1.621-3.307-3.241-4.63-4.762a.779.779,0,0,1-.3-.529,1.213,1.213,0,0,1-.331.529c-1.224,1.521-3.108,3.6-4.729,5.358l-2.811-2.414c1.62-1.687,3.506-3.7,4.894-5.391a3.755,3.755,0,0,0,.893-2.811v-1.555h-4.8V-238.1h13.791v3.638l-4.895.033v1.555a3.559,3.559,0,0,0,.926,2.844C108.148-228.51,109.736-227.121,111.39-225.467ZM123.3-209.658h-4.266V-217.1H100.442v-3.671H122.1c.827,0,1.191.43,1.191,1.257ZM117.21-238.4v16.272h-4.035V-229.5h-4.2v-3.539h4.2V-238.4Zm6.085-.2v16.668h-4.068V-238.6Z"
                     transform="translate(-41.042 238.597)"
                     fill="#222"
                  />
                  <path
                     d="M207.077-213.931v3.7H181.512v-3.7ZM205.886-222v3.638H187.134a3.011,3.011,0,0,1-2.679-1.191l-.628-.661a3.438,3.438,0,0,1-1.092-2.877v-12.138a1.063,1.063,0,0,1,1.191-1.224h21.7v3.638H187v3.6h17.76v3.539H187v2.249a.834.834,0,0,0,.2.562l.6.6a.585.585,0,0,0,.562.264Z"
                     transform="translate(-96.181 237.214)"
                     fill="#222"
                  />
               </g>
            </g>
         </Svg>
      </Link>
   );
}

export default MainLogo;
