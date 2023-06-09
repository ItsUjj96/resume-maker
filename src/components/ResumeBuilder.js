import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { WithContext as ReactTags } from 'react-tag-input';
import './ResumeBuilder.css';
import ParticlesBg from 'particles-bg';


const ResumeBuilder = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState([{ institute: '', year: '', degree: '' }]);
  const [experience, setExperience] = useState([{ company: '', year: '', designation: '' }]);
  const [skills, setSkills] = useState([]);

  const handleAddEducation = () => {
    const updatedEducation = [...education, { institute: '', year: '', degree: '' }];
    setEducation(updatedEducation);
  };

  const handleRemoveEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const handleAddExperience = () => {
    const updatedExperience = [...experience, { company: '', year: '', designation: '' }];
    setExperience(updatedExperience);
  };

  const handleRemoveExperience = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };

  const handleAddSkill = (skill) => {
    const updatedSkills = [...skills, skill];
    setSkills(updatedSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="shadow-box">
      <h1 className='head'>Resume Builder</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Address</Label>
          <Input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Phone</Label>
          <Input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="edu-exp-container">
          <h3>Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="edu-exp-field-container">
              <Input
                type="text"
                placeholder="Institute"
                value={edu.institute}
                onChange={(e) => {
                  const updatedEducation = [...education];
                  updatedEducation[index].institute = e.target.value;
                  setEducation(updatedEducation);
                }}
              />
              <Input
                type="text"
                placeholder="Year of Completion"
                value={edu.year}
                onChange={(e) => {
                  const updatedEducation = [...education];
                  updatedEducation[index].year = e.target.value;
                  setEducation(updatedEducation);
                }}
              />
              <Input
                type="text"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => {
                  const updatedEducation = [...education];
                  updatedEducation[index].degree = e.target.value;
                  setEducation(updatedEducation);
                }}
              />
              {index > 0 && (
                <Button
                  type="button"
                  className="remove-button"
                  onClick={() => handleRemoveEducation(index)}
                >
                  Remove
                </Button>
              )}
            </div>
          ))}
          <Button type="button" className="add-more-button" onClick={handleAddEducation}>
            Add More
          </Button>
        </FormGroup>
        <FormGroup className="edu-exp-container">
          <h3>Experience</h3>
          {experience.map((exp, index) => (
            <div key={index} className="edu-exp-field-container">
              <Input
                type="text"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => {
                  const updatedExperience = [...experience];
                  updatedExperience[index].company = e.target.value;
                  setExperience(updatedExperience);
                }}
              />
              <Input
                type="text"
                placeholder="Year"
                value={exp.year}
                onChange={(e) => {
                  const updatedExperience = [...experience];
                  updatedExperience[index].year = e.target.value;
                  setExperience(updatedExperience);
                }}
              />
              <Input
                type="text"
                placeholder="Designation"
                value={exp.designation}
                onChange={(e) => {
                  const updatedExperience = [...experience];
                  updatedExperience[index].designation = e.target.value;
                  setExperience(updatedExperience);
                }}
              />
              {index > 0 && (
                <Button
                  type="button"
                  className="remove-button"
                  onClick={() => handleRemoveExperience(index)}
                >
                  Remove
                </Button>
              )}
            </div>
          ))}
          <Button type="button" className="add-more-button" onClick={handleAddExperience}>
            Add More
          </Button>
        </FormGroup>
        <FormGroup>
          <Label>Skills</Label>
          <ReactTags
            tags={skills.map((skill, index) => ({ id: index, text: skill }))}
            handleAddition={(tag) => handleAddSkill(tag.text)}
            handleDelete={(index) => {
              const updatedSkills = [...skills];
              updatedSkills.splice(index, 1);
              setSkills(updatedSkills);
            }}
            placeholder="Add skills"
          />
        </FormGroup>
        <Button type="submit" color="primary">
          Save
        </Button>
      </Form>
      <ParticlesBg type="cobweb" bg={true} color="#d62121" num={100} />
    </div>
  );
};

export default ResumeBuilder;
