#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkStarterGhStack } from '../lib/cdk-starter-gh-stack';

const app = new cdk.App();
new CdkStarterGhStack(app, 'CdkStarterGhStack');
