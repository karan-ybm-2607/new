import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { ButtonToolbar, Dropdown, InputGroup, InputNumber, RangeSlider, CheckboxGroup, Checkbox } from 'rsuite';
import "rsuite/dist/styles/rsuite-default.min.css";
import Styles from './Sidebar.module.scss';

const SideBar = () => {
    const [value, setValue] = React.useState([21, 50]);

    return (
        <div className={Styles.SidebarContainer}>
            <Nav defaultActiveKey="/home" className="flex-column">
                <div className="mb-3">
                    <ButtonToolbar>
                        <Dropdown title="Catogries" activeKey="a"  >
                            <Dropdown.Item eventKey="a">Active Item</Dropdown.Item>
                            <Dropdown.Item eventKey="b">Item B</Dropdown.Item>
                            <Dropdown.Item eventKey="c">Item C</Dropdown.Item>
                            <Dropdown.Item eventKey="d">Item D</Dropdown.Item>
                        </Dropdown>
                    </ButtonToolbar>
                </div>
                <div className="mb-3">
                    <p className={Styles.Range}>Age Range:</p>
                    <RangeSlider
                        min={18}
                        max={100}
                        progress
                        style={{ marginTop: 16 }}
                        value={value}
                        onChange={value => {
                            setValue(value);
                        }}
                    />
                    <div className="mt-2">
                        <InputGroup>
                            <InputNumber
                                min={18}
                                max={100}
                                value={value[0]}
                                onChange={nextValue => {
                                    const [start, end] = value;
                                    if (nextValue > end) {
                                        return;
                                    }
                                    setValue([nextValue, end]);
                                }}
                            />
                            <InputGroup.Addon>to</InputGroup.Addon>
                            <InputNumber
                                min={18}
                                max={100}
                                value={value[1]}
                                onChange={nextValue => {
                                    const [start, end] = value;
                                    if (start > nextValue) {
                                        return;
                                    }
                                    setValue([start, nextValue]);
                                }}
                            />
                        </InputGroup>
                    </div>
                </div>

                <div >
                    <CheckboxGroup name="checkboxList" className={Styles.Range}>
                        <p>Filter</p>
                        <Checkbox className={Styles.Check}>Item A</Checkbox>
                        <Checkbox className={Styles.Check}>Item B</Checkbox>
                        <Checkbox className={Styles.Check}>Item C</Checkbox>
                        <Checkbox className={Styles.Check}>Item D</Checkbox>
                        <Checkbox className={Styles.Check}>Item E</Checkbox>
                        <Checkbox className={Styles.Check}>Item F</Checkbox>
                        <Checkbox className={Styles.Check}>Item G</Checkbox>
                        <Checkbox className={Styles.Check}>Item H</Checkbox>
                        <Checkbox className={Styles.Check}>Item I</Checkbox>
                        <Checkbox className={Styles.Check}>Item J</Checkbox>

                    </CheckboxGroup>
                </div>
            </Nav>
        </div >
    )
}

export default SideBar
