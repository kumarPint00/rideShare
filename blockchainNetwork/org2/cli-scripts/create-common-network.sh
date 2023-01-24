#!/bin/bash
echo "***************** Fetch Channel Block ***************"
peer channel fetch 0 common.block -c common -o orderer1.orderer.test.com:7050 --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/orderer/tls/tlsca.orderer.test.com-cert.pem


echo "***************** peer0 - Join common Channel ***************"
CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.test.com/users/Admin@org2.test.com/msp CORE_PEER_ADDRESS=peer0.org2.test.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.test.com/peers/peer0.org2.test.com/tls/ca.crt 
peer channel join -b common.block


echo "***************** Update Anchor Peer ***************"
CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.test.com/users/Admin@org2.test.com/msp CORE_PEER_ADDRESS=peer0.org2.test.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.test.com/peers/peer0.org2.test.com/tls/ca.crt 
peer channel update -o orderer1.orderer.test.com:7050 -c common -f ./channel/org2AnchorPeer.tx --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/orderer/tls/tlsca.orderer.test.com-cert.pem


echo "***************** peer1 - Join common Channel ***************"
CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.test.com/users/Admin@org2.test.com/msp CORE_PEER_ADDRESS=peer1.org2.test.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.test.com/peers/peer1.org2.test.com/tls/ca.crt 
peer channel join -b common.block


