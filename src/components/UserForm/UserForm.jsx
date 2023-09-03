import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import { selectUser } from 'redux/auth/selectors';
import {
  Wrapper,
  Button,
  Title,
  RoleTitle,
  AccountForm,
  Wrap,
  Label,
} from 'components/UserForm/UserForm.styled';
import { UserInput } from 'components/UserInput/UserInput';
import { AvatarUploader } from 'components/AvatarUploader/AvatarUploader';
import { fetchUser, updateUser } from 'redux/auth/operations';
import {
  DatePickerStyled,
  PopperDateStyles,
} from 'components/UserForm/DatePicker.styled';
import { userValidation } from 'components/UserForm/accountValidationRules';

const currentDate = dayjs(new Date()).format('DD/MM/YYYY');

export const UserForm = () => {
  const dispatch = useDispatch();
  const [fileImage, setFileImage] = useState(null);
  const userInfo = useSelector(selectUser);
  const { avatarUrl } = userInfo;
  console.log('avatarUrl', avatarUrl);
  console.log('userInfo', userInfo);
  // const [avatarURL, setAvatarURL] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      dispatch(fetchUser());
    };
    console.log('useEffect');
    getUserInfo();
  }, [dispatch]);

  const handleSubmit = async values => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    if (values.phone) {
      formData.append('phone', values.phone);
    }
    if (values.skype) {
      formData.append('skype', values.skype);
    }
    formData.append('birthday', dayjs(values.birthday).format('DD/MM/YYYY'));

    console.log('avatarURL', avatarUrl);
    console.log('fileImage', fileImage);
    if (fileImage) {
      formData.append('avatar', fileImage);
    }
    // else if (avatarUrl) {
    //   console.log('formData.append(avatar, avatarUrl)', avatarUrl);
    //   formData.append('avatar', avatarUrl);
    // }
    try {
      dispatch(updateUser(formData));
      // await dispatch(refreshUser());
      toast.success('Profile data changed successfully');
    } catch {
      toast.error('Something went wrong... Try again!');
    }
  };

  return (
    <Formik
      initialValues={{
        name: userInfo?.name || '',
        birthday: userInfo?.birthday || `${currentDate}`,
        email: userInfo?.email || '',
        phone: userInfo?.phone || '',
        skype: userInfo?.skype || '',
      }}
      validationSchema={userValidation}
      onSubmit={values => {
        setTimeout(() => {
          handleSubmit(values);
        }, 400);
      }}
    >
      {({ values, setFieldValue, isValid, touched, isSubmitting, dirty }) => (
        <AccountForm>
          <AvatarUploader imageUrl={avatarUrl} setFileImage={setFileImage} />
          <Title>{values.name}</Title>
          <RoleTitle>User</RoleTitle>
          <Wrap>
            <Wrapper>
              <UserInput
                title="User Name"
                type="text"
                name="name"
                placeholder="Add your name"
              />

              <Label>
                Birthday
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePickerStyled
                    name="birthday"
                    type="date"
                    slotProps={{
                      popper: {
                        sx: PopperDateStyles,
                      },
                      textField: {
                        placeholder: userInfo.birthday || `${currentDate}`,
                      },
                    }}
                    views={['year', 'month', 'day']}
                    format="DD/MM/YYYY"
                    closeOnSelect={true}
                    disableFuture={true}
                    onChange={date => {
                      if (!date) setFieldValue('birthday', '');
                      setFieldValue('birthday', date);
                      console.log(typeof date.$d);
                    }}
                  />
                </LocalizationProvider>
              </Label>

              <UserInput
                title="Email"
                type="email"
                name="email"
                placeholder="YourEmail@mail.com"
              />
            </Wrapper>

            <Wrapper>
              <UserInput
                title="Phone"
                type="tel"
                name="phone"
                placeholder="+380960000000"
              />
              <UserInput
                title="Skype"
                type="text"
                name="skype"
                placeholder="Add your skype number"
              />
            </Wrapper>
          </Wrap>
          <Button
            type="submit"
            // disabled={!isValid || !touched || isSubmitting || !dirty}
          >
            Save changes
          </Button>
        </AccountForm>
      )}
    </Formik>
  );
};
