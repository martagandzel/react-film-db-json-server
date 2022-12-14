import './AddMovieForm.css'
import Input from "components/atoms/Input/Input"
import Button from "components/atoms/Button/Button"

function AddMovieForm(props) {


    return (
        <>

            <h2>Add your favourite film</h2>

            <form
                onSubmit={props.handleSubmit}
                className="submit-form"
            >
                <Input
                    className="submit-input"
                    placeholder="title"
                    id="title"
                    value={props.titleInput}
                    HandleChange={props.readTitleInput}
                />
                <Input
                    className="submit-input"
                    placeholder="year"
                    id="year"
                    value={props.yearInput}
                    HandleChange={props.readYearInput}
                />
                <Input
                    className="submit-input"
                    type="text"
                    placeholder="poster"
                    id="poster"
                    value={props.posterInput}
                    HandleChange={props.readPosterInput}
                />
                <Input
                    className="submit-input"
                    type="text"
                    placeholder="description"
                    id="description"
                    value={props.descriptionInput}
                    HandleChange={props.readDescriptionInput}
                />

                <Button
                    className="sumbitNewFilm"
                    text="Submit"
                    onClick={props.handleSubmit}
                />
            </form>

        </>
    )
}

export default AddMovieForm