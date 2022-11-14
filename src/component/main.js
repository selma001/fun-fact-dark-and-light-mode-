

function Main (props) {
    return (
        <main className= {props.darkMode ? "dark" : ""}>
            <h1>Fun facts about React</h1>
            <ul>
                <li>was first released in 2013</li>
                <li>was originally created by jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>is maintained by Facebook</li>
                <li>Powers thousands of entreprises apps, including mobile apps</li>
            </ul>
        </main>
    )
}

export default Main