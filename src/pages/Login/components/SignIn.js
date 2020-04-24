import React, { useState } from 'react';
import { Button, Form, Input, Item, Text, View } from 'native-base';
import { trim } from 'lodash';

import styles from '../styles';
import * as Helper from '../../../utils/helper';

const SignIn = ({ setType, navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errorUsername, setCheckUsername] = useState(false);
  const [errorPassword, setCheckPassword] = useState(false);

  const handleLogin = () => {

    const u = !trim(username);
    const p = !trim(password);
    if (u || p) {
      if (u) setCheckUsername(true);
      if (p) setCheckPassword(true);
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
            placeholder="密码" value={password} onChangeText={text => {
            setCheckPassword(!trim(text));
            setPassword(text);
          }}
          />
        </Item>
      </Form>
      <Button
        style={styles.btn}
        onPress={handleLogin}
      >
        <Text style={{ fontSize: 16 }}>登录</Text>
      </Button>
      <View style={styles.helpText}>
        <Text style={{ fontSize: 16 }}>还没有账户？</Text>
        <Button transparent><Text style={{ fontSize: 16 }} onPress={setType}>创建</Text></Button>
      </View>
    </>
  );
};

export default SignIn;
