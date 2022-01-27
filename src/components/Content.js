

function Content() {
    return (
        <div className="md:flex py-16 px-10 bg-indigo-700 text-indigo-200 text-center">
            {/* FEATURES SECTION */}
            <div className="mr-2 text-center">
                <img src="https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" 
                    className="w-full mb-4 rounded border-solid border-2 border-indigo-400"
                />
                <p>Cuddles!</p>
            </div>
            <div className="mr-2 mt-8 text-center">
                <img src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    className="w-full mb-4 rounded border-solid border-2 border-indigo-400"
                />
                <p>Smiles!</p>
            </div>
            <div className="mr-2 text-center">
                <img src="https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    className="w-full mb-4 rounded border-solid border-2 border-indigo-400"
                />
                <p>Games!</p>
            </div>
            <div className="mr-2 mt-8 text-center">
                <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80" 
                    className="w-full mb-4 rounded border-solid border-2 border-indigo-400"
                />
                <p>Swims!</p>
            </div>
        </div>
    );
}

export default Content
