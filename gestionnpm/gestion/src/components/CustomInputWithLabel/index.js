import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

const CustomInputWithLabel = ({ type, inline, label, field, value, setValue, errored, placeholder, onChange, children, row, labelProps, colProps, disabled, disableLabel,  ...rest }) => (
  <FormGroup row={row}>
    {disableLabel ? null : <Label htmlFor={field} sm={12}{...labelProps}>{label}</Label>}
    <Col sm={12}{...colProps}>
      <Input type={type} invalid={!!errored} value={value} onChange={(e) => { onChange(e); setValue(e.target.value) }} id={field} placeholder={placeholder} disabled={disabled}{...rest}>
        {children}
      </Input>
      {errored && <FormFeedback valid={false}>{errored}</FormFeedback>}
    </Col>
  </FormGroup>
)

CustomInputWithLabel.propTypes = {
  inline: PropTypes.bool, // Display the form in row or colum mode; inline = row mode
  label: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  setValue: PropTypes.func.isRequired,
  errored: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  row: PropTypes.bool.isRequired,
  colProps: PropTypes.shape({}).isRequired,
  labelProps: PropTypes.shape({}).isRequired,
}

CustomInputWithLabel.defaultProps = {
  placeholder: "",
  errored: false,
  inline: false,
  type: "text",
  onChange: () => { },
  row: false,
  colProps: {},
  labelProps: {},
}

export default CustomInputWithLabel;
