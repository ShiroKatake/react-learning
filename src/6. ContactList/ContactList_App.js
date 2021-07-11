import React from "react";
import ContactElement from "./components/ContactElement";

function App() {
	return (
		<div>
			<ContactElement
				contact={{
					name: "Charlie",
					imgUrl: "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/dd/53/b0/dd53b0f1-483f-ebfd-dfff-0796d0848c0b/source/256x256bb.jpg",
					phone: "4531 485 874",
					email: "woofer@doggomail.com",
				}}
			/>
			<ContactElement
				contact={{
					name: "Oscar",
					imgUrl: "https://i.pinimg.com/originals/4e/ae/65/4eae65b560cfad428d1874af80835451.jpg",
					phone: "8462 154 832",
					email: "oscar@doggomail.com",
				}}
			/>
			<ContactElement
				contact={{
					name: "Milo",
					imgUrl: "https://is4-ssl.mzstatic.com/image/thumb/Purple49/v4/76/d0/0c/76d00c6d-7c98-37c6-0762-947b14ff7449/source/256x256bb.jpg",
					phone: "3012 175 427",
					email: "milomaximus@doggomail.com",
				}}
			/>
			<ContactElement
				contact={{
					name: "Ceasar",
					imgUrl: "https://www.petspyjamas.com/uploads/2013/01/100d77a73d09756aad8f9b8d0865154f.png",
					phone: "9754 151 124",
					email: "drooliusceasar@doggomail.com",
				}}
			/>
		</div>
	);
}

export default App;
