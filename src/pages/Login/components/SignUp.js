import React, { useState } from 'react';
import { Button, Form, Input, Item, Text, View } from 'native-base';
import styles from '../styles';
import { trim } from 'lodash';
import * as Helper from '../../../utils/helper';

const SignUp = ({ setType, navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [errorUsername, setCheckUsername] = useState(false);
  const [errorPassword, setCheckPassword] = useState(false);
  const [errorPasswordConfirm, setCheckPasswordConfirm] = useState(false);

  const handleLogin = () => {

    const u = !trim(username);
    const p = !trim(password);
    const c = !trim(passwordConfirm);
    if (u || p || c) {
      if (u) setCheckUsername(true);
      if (p) setCheckPassword(true);
      if (c) setCheckPasswordConfirm(true);
      return;
    }

    if (password !== passwordConfirm) {
      setCheckPassword(true);
      setCheckPasswordConfirm(true);
      return;
    }

    Helper.loginIn(trim(username)).then(success => {
      if (success)
        navigation.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        });
    });
  };

  return (
    <>
      <Form>
        <Item style={styles.formItem} error={errorUsername}>
          <Input
            placeholder="用户" value={username} onChangeText={text => {
            setCheckUsername(!trim(text));
            setUsername(text);
          }}
          />
        </Item>
        <Item style={styles.formItem} error={errorPassword}>
          <Input
            placeholder="密码"
            value={password}
            onChangeText={text => {
              setCheckPassword(!trim(text));
              setPassword(text);
            }}
          />
        </Item>

        <Item style={styles.formItem} error={errorPasswordConfirm}>
          <Input
            placeholder="确认密码"
            value={passwordConfirm}
            onChangeText={text => {
              setCheckPassword(false);
              setCheckPasswordConfirm(!trim(text));
              setPasswordConfirm(text);
            }}
          />
        </Item>
      </Form>
      <Button style={styles.btn} onPress={handleLogin}><Text style={{ fontSize: 16 }}>注册</Text></Button>
      <View style={styles.helpText}>
        <Text style={{ fontSize: 16 }}>已有账户？</Text>
        <Button transparent><Text style={{ fontSize: 16 }} onPress={setType}>登录</Text></Button>
      </View>
    </>
  );
};

export default SignUp;
