import styled from 'styled-components';

export const Box = styled.div`
background: #F8F9FA;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(585px, 1fr));
grid-gap: 100px;
`;

export const FooterLink = styled.a`
color: rgba(33, 37, 41, 0.5);
margin-bottom: 10px;
font-size: 12px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 16px;
color: rgba(33, 37, 41, 0.5);
margin-bottom: 10px;
font-weight: bold;
`;