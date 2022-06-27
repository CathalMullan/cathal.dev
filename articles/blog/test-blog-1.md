---
title: 'Test Blog #1'
description: 'Blog for testing purposes. Rust edition.'
date: '2022-07-01'
tags: ['test', 'rust']
---

# Test Blog #1

This is a test Markdown document.

## Here is a header

Look, some Rust code!

```rust
use tokio::io::AsyncWriteExt;
use tokio::net::TcpStream;

use std::error::Error;

#[tokio::main]
pub async fn main() -> Result<(), Box<dyn Error>> {
    let mut stream = TcpStream::connect("127.0.0.1:4444").await?;
    println!("created stream");

    let result = stream.write(b"hello world\n").await;
    println!("wrote to stream; success={:?}", result.is_ok());

    Ok(())
}
```
