import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Message, Label } from "semantic-ui-react";

const renderCheckbox = field => (
  <Form.Checkbox
    checked={!!field.input.value}
    id={field.id}             
    name={field.input.name}
    label={field.label}
    onChange={(e, { checked }) => field.input.onChange(checked)}
  />
);

const renderRadio = field => (
  <Form.Radio
    checked={field.input.value === field.radioValue}
    label={field.label}
    name={field.input.name}
    onChange={(e, { checked }) => field.input.onChange(field.radioValue)}
  />
);

const renderSelect = field => (
  <Form.Select
    label={field.label}
    name={field.input.name}
    id={field.id}
    onChange={(e, { value }) => field.input.onChange(value)}
    options={field.options}
    placeholder={field.placeholder}
    value={field.input.value}
  />
);

const renderTextArea = field => (
  <Form.TextArea
    {...field.input}
    label={field.label}
    placeholder={field.placeholder}
  />
);

const ProfileForm = props => {
  const { handleSubmit, reset } = props;

  return (
    <Fragment>
      <Message info>
        <p>
          You will don't need any special mappings for <code>Form.Input</code>,
          because it passed events from native inputs.
        </p>
        <p>
          The situation with other components is more complicated, because the{" "}
          <code>Field</code> relies on the native events. However, it can be
          easily with{" "}
          <a
            href="https://redux-form.com/7.4.2/docs/api/field.md/#2-a-stateless-function"
            target="_blank"
          >
            stateless function
          </a>. We recomend to wrap them with generic components to reduce forms
          complexivity.
        </p>
      </Message>

      <Form name="contact" unstackable onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Field required
            component={Form.Input}
            label="First name"
            name="firstName"
            id="firstName"
            type="text"
            placeholder="First name"
          />
          <Field required
            component={Form.Input}
            label="Last name"
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Last name"
          />
          <Field required
            component={Form.Input}
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            /* component={renderSelect}
            label="Gender"
            name="gender"
            options={[
              { key: "m", text: "Male", value: "male" },
              { key: "f", text: "Female", value: "female" }
            ]}
            placeholder="Gender" */
          />
        </Form.Group>
        <Form.Group inline>
          <Field required
          component={renderSelect}
            label="Quantity"
            type="text"
            id="quantity" 
            name="quantity"
            options={[
              { key: "1", text: "1", value: "1" },
              { key: "2", text: "2", value: "2" },
              { key: "3", text: "3", value: "3" },
              { key: "4", text: "4", value: "4" },
              { key: "5", text: "5", value: "5" },
              { key: "6", text: "6", value: "6" },
              { key: "7", text: "7", value: "7" },
              { key: "8", text: "8", value: "8" },
              { key: "9", text: "9", value: "9" },
              { key: "10", text: "10", value: "10" }
            ]}
            placeholder="Choose quantity"
          />
          <Field 
          component={renderSelect}
            label="Size"
            type="text"
            id="size" 
            name="size"
            options={[
              { key: "4", text: "4 Cubic Meters 10cm x 40cm", value: "4 cubes" },
              { key: "2", text: "2 Cubic Meters 10cm x 20cm", value: "2 cubes" },
              { key: "1", text: "1 Cubic Meter 10cm x 10cm", value: "1 cubes" },
              { key: "1/2", text: "Apartment Stack 5cm x 10cm", value: "1/2 cubes" }
            ]}
            placeholder="Choose size"
          />
          
          <Field 
          component={renderSelect}
            label="Quantity"
            type="text"
            id="quantity2" 
            name="quantity2"
            options={[
              { key: "1", text: "1", value: "1" },
              { key: "2", text: "2", value: "2" },
              { key: "3", text: "3", value: "3" },
              { key: "4", text: "4", value: "4" },
              { key: "5", text: "5", value: "5" },
              { key: "6", text: "6", value: "6" },
              { key: "7", text: "7", value: "7" },
              { key: "8", text: "8", value: "8" },
              { key: "9", text: "9", value: "9" },
              { key: "10", text: "10", value: "10" }
            ]}
            placeholder="Choose quantity"
          />
          <Field 
          component={renderSelect}
            label="Size"
            type="text"
            id="size2" 
            name="size2"
            options={[
              { key: "4", text: "4 Cubic Meters 10cm x 40cm", value: "4 cubes" },
              { key: "2", text: "2 Cubic Meters 10cm x 20cm", value: "2 cubes" },
              { key: "1", text: "1 Cubic Meter 10cm x 10cm", value: "1 cubes" },
              { key: "1/2", text: "Apartment Stack 5cm x 10cm", value: "1/2 cubes" }
            ]}
            placeholder="Choose size"
          />
          <Field 
          component={renderSelect}
            label="Quantity"
            type="text"
            id="quantity3" 
            name="quantity3"
            options={[
              { key: "1", text: "1", value: "1" },
              { key: "2", text: "2", value: "2" },
              { key: "3", text: "3", value: "3" },
              { key: "4", text: "4", value: "4" },
              { key: "5", text: "5", value: "5" },
              { key: "6", text: "6", value: "6" },
              { key: "7", text: "7", value: "7" },
              { key: "8", text: "8", value: "8" },
              { key: "9", text: "9", value: "9" },
              { key: "10", text: "10", value: "10" }
            ]}
            placeholder="Choose quantity"
          />
          <Field 
          component={renderSelect}
            label="Size"
            type="text"
            id="size3" 
            name="size3"
            options={[
              { key: "4", text: "4 Cubic Meters 10cm x 40cm", value: "4 cubes" },
              { key: "2", text: "2 Cubic Meters 10cm x 20cm", value: "2 cubes" },
              { key: "1", text: "1 Cubic Meter 10cm x 10cm", value: "1 cubes" },
              { key: "1/2", text: "Apartment Stack 5cm x 10cm", value: "1/2 cubes" }
            ]}
            placeholder="Choose size"
          />
          <Field 
          component={renderSelect}
            label="Quantity"
            type="text"
            id="quantity4" 
            name="quantity4"
            options={[
              { key: "1", text: "1", value: "1" },
              { key: "2", text: "2", value: "2" },
              { key: "3", text: "3", value: "3" },
              { key: "4", text: "4", value: "4" },
              { key: "5", text: "5", value: "5" },
              { key: "6", text: "6", value: "6" },
              { key: "7", text: "7", value: "7" },
              { key: "8", text: "8", value: "8" },
              { key: "9", text: "9", value: "9" },
              { key: "10", text: "10", value: "10" }
            ]}
            placeholder="Choose quantity"
          />
          <Field 
          component={renderSelect}
            label="Size"
            type="text"
            id="size4" 
            name="size4"
            options={[
              { key: "4", text: "4 Cubic Meters 10cm x 40cm", value: "4 cubes" },
              { key: "2", text: "2 Cubic Meters 10cm x 20cm", value: "2 cubes" },
              { key: "1", text: "1 Cubic Meter 10cm x 10cm", value: "1 cubes" },
              { key: "1/2", text: "Apartment Stack 5cm x 10cm", value: "1/2 cubes" }
            ]}
            placeholder="Choose size"
          />
          <Field required
            component={Form.Input}
            label="Address"
            type="text"
            id="address" 
            name="address"
            placeholder="Address"
          />
        </Form.Group>
        <p>Price </p>
        <Label.Group tag size='large'>
          <Label as='a'>₪0.00</Label>
        </Label.Group>
        <Field required
          type="number"
          id="number" 
          placeholder="Enter your phone number"  
          component={Form.Input}
          label="Phone"
          name="number"
        />
        <Field
          component={renderCheckbox}
          label="I agree to the Terms and Conditions"
          name="isAgreed"
          id="isAgreed"
        />
        <Form.Group inline>
          <Form.Button primary>Submit</Form.Button>
          <Form.Button onClick={reset}>Reset</Form.Button>
        </Form.Group>
      </Form>
    </Fragment>
  );
};
export default reduxForm({
  form: "profile"
})(ProfileForm);
