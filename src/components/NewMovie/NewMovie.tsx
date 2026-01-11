import React, { useState } from 'react';
import { TextField } from '../TextField';


  type Props = {
    onAdd: (movie: any) => void;
  };

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [imgUrl, setImgUrl] = React.useState('');
  const [imdbUrl, setImdbUrl] = React.useState('');
  const [imdbId, setimdbId] = React.useState('');
  const isFormInvalid = !title.trim() || !imgUrl.trim() || !imdbUrl.trim() || !imdbId.trim();


  return (
    <form className="NewMovie" key={count}
      onSubmit={(event) => {
        event.preventDefault();
        const newMovie = { title, description, imgUrl, imdbUrl, imdbId };

        onAdd(newMovie);


        setTitle('');
        setDescription('');
        setImgUrl('');
        setImdbUrl('');
        setimdbId('');

        setCount(prev => prev + 1)
      }}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={(newValue) => { setTitle(newValue) }}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={description}
        onChange={(newDescription) => setDescription(newDescription)} />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={imgUrl}
        onChange={(newimgUrl) => { setImgUrl(newimgUrl) }}
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={imdbUrl}
        onChange={(newImdbUrl) => { setImdbUrl(newImdbUrl) }}
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={imdbId}
        onChange={(newImdbId) => { setimdbId(newImdbId) }}
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={isFormInvalid}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
