import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
  useSubmit,
} from 'react-router-dom';

import { useInput } from '../../../hooks/useInput';
import { isNotEmpty, isUrl } from '../../../utils/validation';
import { Input } from '../../ui/Input';
import classes from './EventForm.module.css';

export function EventForm({ method, event }) {
  const data = useActionData();
  const submit = useSubmit();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const {
    value: titleValue,
    handleInputChange: handleTitleChange,
    handleInputBlur: handleTitleBlur,
    hasError: titleHasError,
  } = useInput(event?.title || '', (value) => isNotEmpty(value));

  const {
    value: imageValue,
    handleInputChange: handleImageChange,
    handleInputBlur: handleImageBlur,
    hasError: imageHasError,
  } = useInput(
    event?.image || '',
    (value) => isNotEmpty(value) && isUrl(value),
  );

  const {
    value: dateValue,
    handleInputChange: handleDateChange,
    handleInputBlur: handleDateBlur,
    hasError: dateHasError,
  } = useInput(event?.date || '', (value) => isNotEmpty(value));

  const {
    value: descriptionValue,
    handleInputChange: handleDescriptionChange,
    handleInputBlur: handleDescriptionBlur,
    hasError: descriptionHasError,
  } = useInput(event?.description || '', (value) => isNotEmpty(value));

  const isSubmitting = navigation.state === 'submitting';

  const submitHandler = (evt) => {
    evt.preventDefault();

    submit(
      {
        title: titleValue,
        image: imageValue,
        date: dateValue,
        description: descriptionValue,
      },
      { method },
    );
  };

  const cancelHandler = () => {
    navigate('..');
  };

  return (
    <Form method={method} className={classes.form} onSubmit={submitHandler}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <Input
        id="title"
        type="text"
        name="title"
        label="Title"
        value={titleValue}
        onChange={handleTitleChange}
        onBlur={handleTitleBlur}
        error={titleHasError && 'Please enter a valid title!'}
      />
      <Input
        id="image"
        type="url"
        name="image"
        label="Image"
        value={imageValue}
        onChange={handleImageChange}
        onBlur={handleImageBlur}
        error={imageHasError && 'Please enter a valid url!'}
      />
      <Input
        id="date"
        type="date"
        name="date"
        label="Date"
        value={dateValue}
        onChange={handleDateChange}
        onBlur={handleDateBlur}
        error={dateHasError && 'Please enter a valid url!'}
      />
      <Input
        id="description"
        type="textarea"
        name="description"
        label="Description"
        rows="5"
        value={descriptionValue}
        onChange={handleDescriptionChange}
        onBlur={handleDescriptionBlur}
        error={descriptionHasError && 'Please enter a valid url!'}
      />
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </Form>
  );
}
