# vaco-time
A command line script made with node.js that parses excel files produce by vaco/bullhorn inorder to easily quantify the total amount of hours worked.

## Why?

If you've seen the exported timesheet report, you know what I mean ;)  

## Install 
```
$ npm install vaco-time -g 
```

## Usage

1. Login to the bullhorn site and download your timesheet.
2. Run `vaco-time <path-to-file> in your terminal`

*Optionally you can clone this repo and run `node bin/vaco-time <path-to-file>`*

## Example

```
$ vaco-time myTimeSheet.xls

You have worked a total of 500 hours
```

